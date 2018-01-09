var Sequelize = require('sequelize');

var sequelize = new Sequelize('personal-finance', 'root', 'root',{
	host: 'localhost',
	dialect: 'mysql2',
})

var Expense = sequelize.define('expense',{
	name: {
		type: Sequelize.STRING
	},
	date : {
		type: Sequelize.DATE
	},
	amount: {
		type: Sequelize.FLOAT
	}
})

var 