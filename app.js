// Import of required packages
const dotenv = require('dotenv').config()

// Import of controllers
const tempConverter = require('./helpers/tempConverter')
const sequelize = require('./util/database')
const WeatherData = require('./models/weather_data')

// Define of constants
const cityLat = process.env.LAT
const cityLon = process.env.LON
const apiKey = process.env.API_KEY
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=${apiKey}`

// Define of functions
const collectData = async URL => {
	try {
		const respone = await fetch(URL)
		const weatherData = await respone.json()

		await WeatherData.create({
			city: weatherData.name,
			temp: tempConverter(weatherData.main.temp),
			humidity: weatherData.main.humidity,
			pressure: weatherData.main.pressure,
			windSpeed: weatherData.wind.speed,
		})
	} catch (err) {
		console.log(err)
	}
}

const syncSQL = async () => {
	await sequelize.sync()
}

// Running app (sync SQL data table and then API call every minute)
syncSQL()
setInterval(() => {
	collectData(URL)
}, 60000)
