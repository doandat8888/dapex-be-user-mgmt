const express = require('express');
const route = express.Router();
const createError = require('http-errors');
const User = require('../models/user');
const { userValidate } = require('../helpers/validation');
const { signAccessToken, verifyAccessTokenMiddleWare, signRefreshToken, verifyRefreshToken } = require('../helpers/jwt_service');
const userController = require('../controllers/user');

route.post('/user/login', userController.login);

route.post('/user/register', userController.register);

route.get('/users', verifyAccessTokenMiddleWare, userController.getListUser);

route.post('/user/refresh-token', userController.refreshToken);

route.post('/logout', userController.logout);

route.get('/user/current', userController.getCurrentUser);

module.exports = route;

