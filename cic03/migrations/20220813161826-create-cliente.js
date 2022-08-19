'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING
      },
      nascimento: {
        type: Sequelize.DATEONLY
      },
      // PedidoId:{
      //   type:Sequelize.INTEGER,
      //   allowNull: false,
      //   references:{
      //     model: 'pedidos',
      //     key: 'id'
      //   },
      //   OnUpdate:'CASCADE',
      //   OnDelete:'CASCADE'
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
};