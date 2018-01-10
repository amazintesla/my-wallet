'use strict';

module.exports = (sequelize, DataTypes) => {
	var Category = sequelize.define('Category' {
		title: DataTypes.STRING
	});

	Category.associate= function(models){
		models.Category.hasMany(models.Expense)
	};

	return Category;
}