'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemPedido extends Model {
    
    static associate(models) {
      ItemPedido.belongsTo(models.Pedido);
      ItemPedido.belongsTo(models.Servico);
    }
  }
  ItemPedido.init({
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.FLOAT
    
  }, {
    sequelize,
    modelName: 'ItemPedido',
  });
  return ItemPedido;
};