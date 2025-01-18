const { Schema, model } = require('mongoose'); 

const userModel = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        default: null
    },
    role: {
        type: String,
        enum: ['ADMIN', 'TEACHER', 'STAFF', 'USER'],
        default: 'USER',
        required: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended'],
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true
    },

)
const User_model = model('USER', userModel);



module.exports = User_model;
