const Bottle = require('bottlejs')
const UsersController = require('./controllers/v1/UsersController')
const UsersRepository = require('./services/repositories/UsersRepository')
const Database = require('./models/')
const di = new Bottle()


di.factory('Database', () => Database)
di.service('UsersRepository', UsersRepository, 'Database')
di.service('UsersController', UsersController, 'UsersRepository')

module.exports = di.container