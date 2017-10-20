const getUserByIdCtrl = require('./getUserByIdCtrl')

module.exports = app => {
    app.get('/api/user/:id', getUserByIdCtrl.getUserById)
    app.get('/api/user', getUserByIdCtrl.getUserUsername)
}