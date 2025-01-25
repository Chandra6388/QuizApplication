"use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require('../../Modals');
const User = db.user; 

// Login CLASS
class Dashboard {

    async getLastFiveStudentsResistered(req, res) {
        try {
            const getStudent = await User.find({ role: "USER" }).sort({ createdAt: -1 }).limit(5);
            if (getStudent) {
                return res.send({ status: true, msg: "Last five students", data: getStudent });
            }
            return res.send({ status: false, msg: "No students found", data: [] });

        }
        catch (err) {
            return res.send({ status: false, msg: "Something went wrong", data: [] });
        }
    }


}




module.exports = new Dashboard();