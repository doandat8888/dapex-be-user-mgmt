const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    avt: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('User', UserSchema)
