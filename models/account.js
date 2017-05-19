module.exports = function(sequelize, DataTypes) {
  var Accounts = sequelize.define("Accounts", {

  	Company: DataTypes.STRING,
  	Name: DataTypes.STRING,
    Address: DataTypes.STRING,
  	City: DataTypes.STRING,
  	State: DataTypes.STRING,
  	Zip: DataTypes.STRING,
  	Telephone: DataTypes.STRING,
  	Fax: DataTypes.STRING,
    Email:DataTypes.STRING
  
  	//enter account columns

  })
  return Accounts;
};  