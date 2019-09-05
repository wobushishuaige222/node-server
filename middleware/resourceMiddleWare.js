module.exports = options => {
    return async (req, res, next) => {
        const ModelName = require('inflection').classify(req.params.resource)
        let Model
        if (ModelName === 'AdminUser') {
            Model = options
        } else {
            Model = require(`../models/${ModelName}`)
        }
        req.model = Model
        req.model.ModelName = ModelName
        await next()
    }
}