const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
  username: String,
  password: {
    type: String,
    select: false,
    set(val) {
      return require('bcrypt').hashSync(val, 12)
    }
  }
})
//bcrypt 散列密码
module.exports = mongoose.model('AdminUser', Schema)