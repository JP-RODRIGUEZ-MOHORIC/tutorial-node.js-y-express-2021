const mongoose = require('mongoose')

const password = 'Juampi2003'

const dbname = 'pokedex'

const uri = `mongodb+srv://Juampi:${password}@cluster0.bgne8.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})