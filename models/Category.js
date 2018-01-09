'use strict';

module.exports = (sequelize, DataTypes) => {
	var Category = sequelize.define('Category' {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: DataTypes.STRING
	})
}