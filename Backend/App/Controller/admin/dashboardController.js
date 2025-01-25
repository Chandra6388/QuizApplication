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

    async getAllStudents(req , res){
        try{
            const getStudent = await User.find({role:"USER"});
            if(getStudent){
                res.send({status:true, msg:"All students", data:getStudent});
            }
            else{
                res.send({status:false, msg:"No students found", data:[]});
            }
        }
        catch(err){
            return res.send({ status: false, msg: "Something went wrong", data: [] });
        }
    }

    async getDashbordeData(req,res){
        try{
            const totalStudents = await User.countDocuments({role:"USER"});
            // const totalTeachers = await User.find({role:"TEACHER"}).count();
            // const totalQuestions = await Question.find().count();
            // const totalExams = await Exam.find().count();
            // const totalSubjects = await Subject.find().count();
            // const totalChapters = await Chapter.find().count();
            if(!totalStudents){
                return res.send({status:false, msg:"No data found", data:[]});
            }

            res.send({status:true, msg:"Dashboard data", data:{totalStudents}});
        }
        catch(err){
            console.log("err", err);
            return res.send({ status: false, msg: "Something went wrong", data: [] });
        }
    }
}




module.exports = new Dashboard();