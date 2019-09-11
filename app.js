const express = require('express')
const bodyParser = require('body-parser');
const logger = require('morgan')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser:true
    },()=>console.log("connect")
)
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(logger('dev'));
//middleware
const route_user = require('./app/route/route.user')
app.use('/user',route_user)

module.exports = app