const express = require('express')
const app = express()
app.set('secret', '1a2b3c4d5e6f')
app.use(require('cors')()) //处理跨域
app.use(express.json()) //处理json数据
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/web', express.static(__dirname + '/web'))
app.use('/uploads', express.static('./uploads'))
require('./plugin/db.js')(app) //连接数据库
require('./routes/admin/index.js')(app)
require('./routes/web/index.js')(app)
app.listen(3000, () => {
    console.log('localhost:3000')
})