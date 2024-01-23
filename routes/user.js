const express = require('express');
const route = express.Router();
const createError = require('http-errors');
const User = require('../models/user');
const { userValidate } = require('../helpers/validation');
const { signAccessToken } = require('../helpers/jwt_service');

route.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            msg: 'Missing email or password'
        })
    }
    const user = await User.findOne({
        email: email
    })
    if (!user) {
        return res.status(400).json({
            msg: "Email is not existed"
        })
    }
    // const user = await User.findOne({
    //     email: email,
    //     password: password
    // })
    const isValidPassword = await user.isCheckPassword(password);
    if (!isValidPassword) {
        return res.status(400).json({
            msg: "Wrong password"
        })
    }

    const accessToken = await signAccessToken(user._id);
    return res.status(200).json({
        accessToken: accessToken
    })
});

route.post('/register', async (req, res, next) => {
    try {
        const { email, password, name, avt } = req.body
        // if (!email || !password || !name) {
        //     return res.status(400).json({
        //         msg: 'Missing user information'
        //     })
        // }
        const { error } = userValidate(req.body);
        if(error) {
            return res.status(400).json({
                msg: 'Missing user information'
            })
        }
        const isExist = await User.findOne({
            email: email
        })
        if (isExist) throw createError.Conflict('Email has already existed')
        // const isCreate = await User.create({
        //     email,
        //     password,
        //     name,
        //     avt: avt ? avt : '',
        //     role: 'member'
        // })

        const user = new User({
            email,
            password,
            name,
            avt: avt ? avt : '',
            role: "member"
        })

        const isCreate = await user.save();

        if (isCreate) {
            return res.json({
                msg: "Create user successfully"
            })
        }
    } catch (error) {
        next(error)
    }

})

route.post('/refresh-token', (req, res, next) => {
    res.send('Refresh token func');
})

route.post('/logout', (req, res, next) => {
    res.send('Logout func');
})

module.exports = route;

