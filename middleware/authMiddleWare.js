module.exports = options => {
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../models/adminUser')
  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, 'token丢失了')
    const id = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '无效的token')
    req.user = await AdminUser.findById(id.id)
    assert(req.user, 401, '请先登录')
    next()
  }
} 