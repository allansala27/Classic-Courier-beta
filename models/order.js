module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
  	CO-code: DataTypes.STRING,
  	GL-account: DataTypes.STRING,
  	cost-center: DataTypes.STRING,
  	profit-center: DataTypes.STRING,
  	internal-order-number: DataTypes.STRING,
  	WBS-entity: DataTypes.STRING,
  	WBS-service: DataTypes.STRING,
  	market: DataTypes.STRING,
  	MPM: DataTypes.STRING,
  	territory:DataTypes.STRING,
  	PO-number: DataTypes.STRING,
  })
  return Order;
};