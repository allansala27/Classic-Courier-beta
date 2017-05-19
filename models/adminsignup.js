var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {

  var LoginInfo = sequelize.define("login", {
  	account: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isAccount: true
      }
    },
    //The webid cannot be null and is valid
    webid: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isWebid: true
          }
      },
	// The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
  	// Creating a custom method for our LoginInfo model. This will check if an unhashed password entered by
    // The user can be compared to the hashed password stored in our database
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },
     // Hooks are automatic methods that run during various phases of the user Model lifecycle
    // In this case, before LoginInfo is created, we will automatically hash their password
    hooks: {
      beforeCreate: function(LoginInfo, options, cb) {
        LoginInfo.password = bcrypt.hashSync(LoginInfo.password, bcrypt.genSaltSync(10), null);
        cb(null, options);
      }
    }
  })
  return LoginInfo;
};  