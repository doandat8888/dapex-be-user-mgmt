const Joi = require('joi');

const userValidate = (data) => {
    const userSchema = Joi.object({
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().max(30).min(8).required(),
        name: Joi.string().required(),
        avt: Joi.string().optional()
    })

    return userSchema.validate(data);
}

module.exports = {
    userValidate
}