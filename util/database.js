const Sequelize = require('sequelize')

const dotenv = require('dotenv').config({ path: __dirname + '/../' })

const rootPassword = process.env.MYSQL_ROOT_PASSWORD
const hostIP = process.env.HOST_IP

const sequelize = new Sequelize('weather', 'root', `${rootPassword}`, {
	dialect: 'mysql',
	host: hostIP,
})

module.exports = sequelize
