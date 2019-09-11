const express = require('express')
const app = express.Router()
const controller_user = require('./../controller/controller.user')
const {validateBody,schema} = require('./../helper/routehelper')
app.post('/create', controller_user.signUp)
module.exports = app