"use strict"

const { Schema, model } = require('mongoose');

const SignupUserModel = Schema({
    FullName: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
    UserName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        default: null
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        default: null
    },
    PhoneNo: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 10,
        unique: true,
        default: null
    },
    Create_Date: {
        type: Date,
        default: Date.now
    },
    End_Date: {
        type: Date,
        default: null
    },
    Password: {
        type: String,
        required: true,
        trim: true,
        default: null
    },
},
    {
        timestamps: true
    },

)
const SignUpUser_model = model('SIGNUPUSERS', SignupUserModel);



module.exports = SignUpUser_model;
