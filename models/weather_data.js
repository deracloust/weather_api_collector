const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const WeatherData = sequelize.define('data', {
	city: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	temp: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},
	humidity: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	pressure: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	windSpeed: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
})

module.exports = WeatherData
