const express = require('express');
const { getAllData, createData } = require('../App/http/Controller/API/MahasiswaController');
const router = express.Router();

/* GET mahasiswa listing. */
router.get('/', getAllData);
router.post('/' , createData);

module.exports = router;
