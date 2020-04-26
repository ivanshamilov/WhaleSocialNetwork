const User = require('../models/user');
const HttpError = require('../util/http-error');


const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const getCoordsFromAddress = require('../util/location');




const signup = async (req, res, next) => {
    
    const { email, password, name, surname, dateOfBirth, location } = req.body;

    console.log(email, password, name, surname);
    

    let existingUser;

    try {  
        existingUser = await User.findOne({email: email});
    } catch (err) {
        const error = new HttpError('Failed to create a user', 500);
        return next(error);
    }


    if(existingUser) {
        const error = new HttpError('User with provided email already exists', 500);
        return next(error);
    }


    // try {
    //     coordinates = await getCoordsFromAddress(location);
    // } catch (err) {
    //     const error = new HttpError('Failed to get coordinates', 500);
    //     return next(error);
    // }

    // console.log(coordinates);

    let hashedPassword;

    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        const error = new HttpError('Failed to create a user', 500);
        return next(error);
    }

    console.log(hashedPassword);

    const createdUser = new User({
        email: email,
        password: hashedPassword,
        name: name,
        surname: surname,
        dateOfBirth: dateOfBirth,
        location: location,
        // coords: coordinates
    });




    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError('Failed to create a user', 500);
        return next(error)
    }

    const token = jwt.sign({
        userId: createdUser.id,
        userEmail: createdUser.email
    }, 'supersecretkey', {expiresIn: '1h'});



    res.status(201).json({
        message: 'user created successfully',
        token: token,
        userId: createdUser.id
    })



};


const login = async (req, res, next) => {

    const { email, password } = req.body;

    let isEqual;
    let user;

    try {
        user = await User.findOne({
            email: email
        })
    } catch (err) {
        const error = new HttpError('Something went wrong. Try again later' , 500);
        return next(error);
    }

    if (!user) {
        const error = new HttpError('User with provided credentials does not exist', 500);
        return next(error);
    }


    try {
        isEqual = await bcrypt.compare(password, user.password);
    } catch (err){
        const error = new HttpError('Something went wrong', 500);
        return next(error);
    }

    if(!isEqual) {
        const error = new HttpError('User with provided credentials does not exist', 500);
        return next(error);
    }

    const token = jwt.sign({
        userId: user.id,
        userEmail: user.email
    }, 'supersecretkey', {expiresIn: '1h'});


    res.status(200).json({
        message: 'logged in successfully',
        token: token,
        email: user.email,
        userId: user.id
    })
    

};

exports.signup = signup;
exports.login = login;