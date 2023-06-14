'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('tb_mahasiswa' , {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nama_mahasiswa: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    foto_mahasiswa: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
      allowNull: false
    },
   });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('tb_mahasiswa');
  }
};
