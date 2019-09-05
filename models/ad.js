const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
   name:String,
   items:[{
       image: String,
       url: String
   }]
})
module.exports = mongoose.model('Ads', Schema)