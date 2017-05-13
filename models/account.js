module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("Account", {

  	Company: DataTypes.STRING,
  	Name: DataTypes.STRING,
  	Company: DataTypes.STRING,
  	Name: DataTypes.STRING,
  	City: DataTypes.STRING,
  	State: DataTypes.STRING,
  	Zip_code: DataTypes.STRING,
  	Telephone: DataTypes.STRING,
  	Fax: DataTypes.STRING,
  
  	//enter account columns

  })
  return Account;
};  