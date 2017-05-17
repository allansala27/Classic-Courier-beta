module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define("Orders", {
  	CO_code: DataTypes.STRING,
  	GL_account: DataTypes.STRING,
  	cost_center: DataTypes.STRING,
  	profit_center: DataTypes.STRING,
  	internal_order_number: DataTypes.STRING,
  	WBS_entity: DataTypes.STRING,
  	WBS_service: DataTypes.STRING,
  	market: DataTypes.STRING,
  	MPM: DataTypes.STRING,
  	territory:DataTypes.STRING,
  	PO_number: DataTypes.STRING,
  })
  return Orders;
};