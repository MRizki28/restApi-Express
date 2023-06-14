module.exports = (sequelize, DataTypes) => {
    const Mahasiswa = sequelize.define(
        'Mahasiswa',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nama_mahasiswa: {
                type: DataTypes.STRING,
                allowNull: false
            },
            foto_mahasiswa: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                field: 'created_at',
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                field: 'updated_at',
                type: DataTypes.DATE,
                allowNull: false
            },
        },
        {
            tableName:
            'tb_mahasiswa',
        }
    );
    return Mahasiswa
};