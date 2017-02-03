import Sequelize = require('sequelize');
var sequelize = new Sequelize('amoms', 'amoms', '', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 1,
		idle: 10000
	},
	logging: console.log.bind(console,"SQL")
});

export = sequelize;