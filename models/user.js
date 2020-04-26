const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    // coords: {
    //     lng: {
    //         type: Number,
    //         required: true
    //     },
    //     lat: {
    //         type: Number,
    //         required: true
    //     }
    // }
});

module.exports = mongoose.model('user', UserSchema);