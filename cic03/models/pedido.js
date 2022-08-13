'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    
    static associate(models) {
      Pedido.belongsTo(models.Cliente);
      Pedido.belongsToMany(models.Servico, {
        through:'ItemPedido'
      });
    }
  }
  Pedido.init({
    dataPedido: DataTypes.DATEONLY,

  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};