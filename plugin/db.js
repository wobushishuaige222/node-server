module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/', {
        useNewUrlParser: true,
        dbName: 'test-project-moba'
    })
    require('require-all')(__dirname+'/../models/')
}