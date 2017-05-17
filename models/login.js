module.exports = function(sequelize, DataTypes) {
  var LoginInfo = sequelize.define("LoginInfo", {


  	account: DataTypes.STRING,
  	webid: DataTypes.STRING,
  	password: DataTypes.STRING,


  })
  return LoginInfo;
};  