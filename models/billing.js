module.exports = function(sequelize, DataTypes) {
	var BillingInfo = sequelize.define("BillingInfo" , {

		Company: DataTypes.STRING,
  		Attn: DataTypes.STRING,
  		Address: DataTypes.STRING,
  		City: DataTypes.STRING,
  		State: DataTypes.STRING,
  		Zip: DataTypes.STRING,
  		Telephone: DataTypes.STRING,
  		Fax: DataTypes.STRING,
  		Credit_card: DataTypes.STRING,
  		Expiration: DataTypes.STRING,
  		Fax: DataTypes.STRING,
	})
  return BillingInfo;
}