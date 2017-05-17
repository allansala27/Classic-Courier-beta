module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define("Orders", {

    originLocationAlias: DataTypes.STRING,
    originStreet: DataTypes.STRING,
    originUnit: DataTypes.INTEGER,
    originCity: DataTypes.STRING,
    originState: DataTypes.STRING,
    originZipCode: DataTypes.INTEGER,
    originCountry: DataTypes.STRING,
    originContact: DataTypes.STRING,
    originPhone: DataTypes.INTEGER,

    destinationLocationAlias: DataTypes.STRING,
    destinationStreet: DataTypes.STRING,
    destinationUnit: DataTypes.INTEGER,
    destinationCity: DataTypes.STRING,
    destinationState: DataTypes.STRING,
    destinationZipCode: DataTypes.INTEGER,
    destinationCountry: DataTypes.STRING,
    destinationContact: DataTypes.STRING,
    destinationPhone: DataTypes.INTEGER,

    pickupdate: DataTypes.DATE,
    readytime: DataTypes.TIME,
    service: DataTypes.STRING,
    vehicle: DataTypes.STRING,
    insurance: DataTypes.BOOLEAN,
    declaredValue: DataTypes.INTEGER,

    packages: DataTypes.INTEGER,
    box: DataTypes.INTEGER,
    envelope: DataTypes.INTEGER,
    film: DataTypes.INTEGER,
    foodOrder: DataTypes.INTEGER,
    gift: DataTypes.INTEGER,
    pallets: DataTypes.INTEGER,
    tape: DataTypes.INTEGER,

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