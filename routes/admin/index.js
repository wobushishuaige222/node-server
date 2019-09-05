module.exports = app => {
  const router = require('express').Router({
    mergeParams: true
  })
  const authMiddleWare = require('../../middleware/authMiddleWare.js')
  const resourceMiddleWare = require('../../middleware/resourceMiddleWare.js')
  
  const assert = require('http-assert') //�����쳣
  const AdminUser = require('../../models/adminUser')
  const multer = require('multer') // ��̬�ļ��й�
  const upload = multer({
    dest: __dirname + '/../../uploads'
  })
  const jwt = require('jsonwebtoken')
  require('mongoose').set('useFindAndModify', false)
  router.post('/', async function (req, res) {
    const model = await req.model.create(req.body)
    res.send({
      code: 200,
      data: model
    })
  })
  // �༭��Դ
  router.put('/:id', async (req, res) => {
    const model = await req.model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // ɾ����Դ
  router.delete('/', async (req, res) => {
    await req.model.deleteMany()
    res.send('数据已经全部清空')
  })
  // ɾ��ĳ����Դ
  router.delete('/:id', async (req, res) => {
    const message = await req.model.findByIdAndDelete(req.params.id)
    res.send(message)
  })
  // ��Դ�б�
  router.get('/', async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, 'token认证失败')
    const {
      id
    } = jwt.verify(token, app.get('secret'))
    assert(id, 401, '丢失token')
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '用户认证失败')
    next()
  }, async function (req, res) {
    let options = {}
    if (req.model.ModelName == 'Category') {
      options.populate = 'parent'
    }
    const item = await req.model.find().setOptions(options)
    res.send(item.reverse())
  })
  router.get('/edit/:id', async (req, res) => {
    const data = await req.model.findById(req.params.id)
    res.send(data)
  })
  // �ϴ��ļ�
  app.post('/admin/api/upload', authMiddleWare(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    return res.send(file)
  })
  // ������ӿ�
  app.use('/admin/api/rest/:resource', authMiddleWare(), resourceMiddleWare(AdminUser), router)
  app.post('/admin/api/login', async (req, res) => {
    const {
      username,
      password
    } = req.body
    const model = AdminUser ? AdminUser : require('../../models/AdminUser')
    // ��һ�������û������û�������ͬʱ�����û���������һ���ң���Ϊ�û��������Ǿ������ܵ�
    // �ڶ���У������
    // ����������token�����ں�����http������ͷ�м������tokenֵ������ʶ���û�������
    assert(username, 402, '请输入用户名')
    const userMessage = await model.findOne({
      username
    }).select('+password')
    assert(userMessage, 402, '用户不存在')
    assert(password, 402, '请输入用户密码')
    const isValid = require('bcrypt').compareSync(password, userMessage.password)
    assert(isValid, 422, '密码出错')
    const token = jwt.sign({
      id: userMessage._id
    }, app.get('secret')) //app.get('secret')��ʾһ����Կ�������Ǹ�һ����Կ�������㷨����token
    res.send({
      code: 200,
      token: token,
      loginMessage: `欢迎回来${userMessage.username}`
    })
  })
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}