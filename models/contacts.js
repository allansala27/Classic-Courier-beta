module.exports = function(sequelize, DataTypes) {
    var Contacts = sequelize.define("Contacts", {
    	Name: DataTypes.STRING,
    	Email: DataTypes.STRING,
    	Subject: DataTypes.STRING,
    	Message: DataTypes.STRING
    })
    return Contacts;
};
