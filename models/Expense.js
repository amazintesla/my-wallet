'use strict';
module.exports = (sequelize, DataTypes) => {
	
	var Expense = sequelize.define('expense' {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		}
		amount: DataTypes.INTEGER,
		date: DataTypes.DATE
	});

	//foreign key from category model
	category_id {
		type: sequelize.INTEGER,

		references: {
			model: category,
			key: 'id'
		}
	}

	user_id {
		type: sequelize.INTEGER,

		references: {
			model: user,
			key: 'id'
		}
	}

	Expense.associate = function(models){
		models.Expense.belongsTo(models.User)
	}
}