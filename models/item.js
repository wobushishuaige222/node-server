const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: String,
    icon: {
        type: String
    }
})
module.exports = mongoose.model('Items', schema)