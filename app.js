// Import of required packages
const dotenv = require('dotenv').config()

// Import of controllers
const tempConverter = require('./helpers/tempConverter')

//Define of constants
const cityLat = process.env.LAT
const cityLon = process.env.LON
const apiKey = process.env.API_KEY
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=${apiKey}`

const collectData = async URL => {
	const respone = await fetch(URL)
	const weatherData = await respone.json()

	const city = weatherData.name
	const temp = weatherData.main.temp
    const humidity = weatherData.main.humidity
    const pressure = weatherData.main.pressure
    const windSpeed = weatherData.wind.speed

    
}

collectData(URL)
