"use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

 
const db = require('../../Models');
const SignUpUser = db.SignUpUser;
const User = db.user;
 


// Login CLASS
class Auth {

    // Login User
    async login(req, res) {
        console.log(req.body);
    }
 

}


module.exports = new Auth();