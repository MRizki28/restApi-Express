const { request, response } = require('express');
const { Mahasiswa } = require('../../../../models/index');
const Joi = require('joi');
const multer = require('multer');
const path = require('path');

const getAllData = async (request, response) => {
    const data = await Mahasiswa.findAll();

    if (data == null) {
        return response.json({
            code: 400,
            message: 'data not fount'
        });
    } else {
        return response.json({
            code: 200,
            message: 'success',
            data: data
        });
    }

}

// Konfigurasi multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    },
});
const upload = multer({ storage: storage }).single('foto_mahasiswa');

const createData = async (request, response) => {
    upload(request, response, async function (error) {
        if (error) {
            return response.status(400).json({
                code: 400,
                message: 'failed to upload file',
                errors: error.message,
            });
        }

        const schema = Joi.object({
            nama_mahasiswa: Joi.string().required(),
        });

        const { error: validationError } = schema.validate(request.body);
        if (validationError) {
            return response.status(400).json({
                code: 400,
                message: 'check your validation',
                errors: validationError.details.map((err) => err.message),
            });
        }

        try {
            const { nama_mahasiswa } = request.body;
            const data = await Mahasiswa.create({
                nama_mahasiswa,
                foto_mahasiswa: request.file ? request.file.filename : null,
            });

            return response.status(200).json({
                code: 200,
                message: 'success create data',
                data: data,
            });
        } catch (error) {
            console.log(error);

            return response.status(400).json({
                code: 400,
                message: 'failed',
                errors: error.message,
            });
        }
    });
};

module.exports = {
    getAllData,
    createData
};
