module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("Login", {

  	account: DataTypes.INTEGER,
  	webid: DataTypes.STRING,
  	password: DataTypes.STRING,
  	//enter account columns

  })
  return Login;
};  