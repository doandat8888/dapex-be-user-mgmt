const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

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

//Check presave user
UserSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(this.password, salt);
        this.password = hashpassword;
        next()
    } catch (error) {
        next(error);
    }
})

UserSchema.methods.isCheckPassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoose.model('User', UserSchema)
