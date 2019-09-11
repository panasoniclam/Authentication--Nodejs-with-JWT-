const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    }
})
const user = mongoose.model('user',userSchema)