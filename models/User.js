'use strict';

module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: DataTypes.STRING,
		password: DataTypes.STRING

	});

}