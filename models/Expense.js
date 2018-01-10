'use strict';
module.exports = (sequelize, DataTypes) => {
	
	var Expense = sequelize.define('expense' {
		title: DataTypes.STRING,
		amount: DataTypes.INTEGER,
		date: DataTypes.DATE
	});

	
	// foreign key from user model
	Expense.associate = function(models){
		models.Expense.belongsTo(models.User, {
			as: 'userId',
			foreignKey: 'userId'
		});
	};

	// foreign key for category model
	Expense.associate = function(models){
		models.Expense.belongsTo(models.Category, {
			as: 'categoryId',
			foreignKey: 'categoryId'
		});
	};

	return Expense;
}