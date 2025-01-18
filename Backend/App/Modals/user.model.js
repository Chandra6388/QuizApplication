const { Schema, model } = require('mongoose'); 

const userModel = Schema({
    fullname: {
        type: String,
        required: true 
    },
    username: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true 
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
