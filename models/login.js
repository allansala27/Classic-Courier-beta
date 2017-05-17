module.exports = function(sequelize, DataTypes) {
  var LoginInfo = sequelize.define("LoginInfo", {

<<<<<<< HEAD
  	account: DataTypes.INTEGER,
  	webid: DataTypes.STRING,
  	password: DataTypes.STRING,
  	//enter account columns
=======
  	account: DataTypes.STRING,
  	webid: DataTypes.STRING,
  	password: DataTypes.STRING,
>>>>>>> master

  })
  return LoginInfo;
};  