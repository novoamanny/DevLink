const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        tyoe: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = USer = mongoose.model('users', UserSchema);