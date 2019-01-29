const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const Sequelize = require('sequelize')

const db = new Sequelize('rentnesia', 'root', 'password123', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

// Test Connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express()

app.get('/', (req, res) => res.send('INDEX'))

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server started on port ${PORT}`))
