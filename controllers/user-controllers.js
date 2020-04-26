const User = require('../models/user');
const HttpError = require('../util/http-error');


const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const getCoordsFromAddress = require('../util/location');


const getUsers = async (req, res, next) => {
    let fetchedUsers;
    try {
        fetchedUsers = await User.find();
    } catch (err) {
        const error = new HttpError('Fetching users failed', 500);
        return next(error);
    }

    res.status(200).json({
        users: fetchedUsers,
        message: 'Fetched successfully'
    })

}

exports.getUsers = getUsers;