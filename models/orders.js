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

    //!!!!Sony specific accounting fields!!!!!!!!
    //This is what they care about the most!
  	CO_code: DataTypes.INTEGER,
  	GL_account: DataTypes.INTEGER,
  	cost_center: DataTypes.INTEGER,
  	profit_center: DataTypes.INTEGER,
  	internal_order_number: DataTypes.INTEGER,
  	WBS_entity: DataTypes.INTEGER,
  	WBS_service: DataTypes.INTEGER,
  	market: DataTypes.INTEGER,
  	MPM: DataTypes.INTEGER,
  	territory:DataTypes.INTEGER,
  	PO_number: DataTypes.INTEGER,

    comments: DataTypes.STRING,

    timestamp: DataTypes.TIME
  })
  return Orders;
};

