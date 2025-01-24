"use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const db = require('../../Modals');
const User = db.user;








// Login CLASS
class Auth {

    // Login User
    async login(req, res) {
        const { username, password } = req.body;

        const findUser = await User.findOne({ username: username });
        if (!findUser) {
            return res.send({ status: false, msg: "User not found", data: [] });
        }

        const isPasswordValid = await bcrypt.compare(password, findUser.password);
        if (!isPasswordValid) {
            return res.send({ status: false, msg: "Invalid password", data: [] });
        }

        const token = jwt.sign({ id: findUser.id }, process.env.SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,

        });
        return res.send({ status: true, msg: "Login successfully", data: findUser, token: token });
    }

    // Register User
    async register(req, res) {
        try {
            const { phone, username, password, role, fullname, email } = req.body;

            const checkUserExists = {
                $or: [
                    { email: email },
                    { phone: phone },
                    { username: username }
                ]
            }
            const findUser = await User.findOne(checkUserExists);
            if (findUser) {
                if (findUser.email == email) {
                    return res.send({ status: false, msg: "Email already exists", data: [] });
                }
                if (findUser.phone == phone) {
                    return res.send({ status: false, msg: "Phone already exists", data: [] });
                }
                if (findUser.username == username) {
                    return res.send({ status: false, msg: "Username already exists", data: [] });
                }
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const newUser = new User({
                fullname,
                username,
                email,
                phone,
                role,
                password: hashedPassword,
            });

            // Save user
            await newUser.save();
            return res.send({ status: true, msg: "User registered successfully", data: [] });
        }


        catch (err) {
            console.log("err", err);
            return res.send({ status: false, msg: "Something went wrong", data: [] });
        }


    }
}


module.exports = new Auth();