const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    icon: String,
    description: String,
    name: String
})
module.exports = mongoose.model('Inscription',Schema)