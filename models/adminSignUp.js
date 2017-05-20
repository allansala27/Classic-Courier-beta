var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {

  var AdminSignUp = sequelize.define("adminSignUp", {
    account: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   // isAccount: true
      // }
    },
    //The webid cannot be null and is valid
    webId: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isWebid: true
      //     }
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
    // In this case, before adminsignUp is created, we will automatically hash their password
    hooks: {
      beforeCreate: function(AdminSignUp, options, cb) {
        AdminSignUp.password = bcrypt.hashSync(AdminSignUp.password, bcrypt.genSaltSync(10), null);
        cb(null, options);
      }
    }
  })
  return AdminSignUp;
};  