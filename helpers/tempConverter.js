//Define function
const tempConverter = kTemp => {
	return (kTemp - 273.15).toFixed(2)
}

module.exports = tempConverter
