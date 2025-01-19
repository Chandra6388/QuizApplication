"use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require('../../Modals');
const Question = db.question;


// Login CLASS
class Questions {

    // add question
    async addQuestion(req, res) {
        const { question, questionType, subject, chapter, difficulty, option1, option2, option3, option4, correctOption, explanation } = req.body;

        function generateUniqueID() {
            const randomNumber = Math.floor(1000 + Math.random() * 9000);
            const randomString = Math.random().toString(36).substr(2, 4).toUpperCase(); //  
            return `${randomNumber}_${randomString}`;
        }

        const questionID = generateUniqueID();

        if (!questionID) {
            return res.send({ status: false, msg: "Unique ID not generated", data: [] });
        }

        const checkUniqueID = await Question.findOne({ questionID: questionID });

        if (checkUniqueID) {
            return res.send({ status: false, msg: "Unique ID already exists", data: [] });
        }

        if (!question || !questionType || !subject || !chapter || !difficulty || !option1 || !option2 || !option3 || !option4 || !correctOption || !explanation) {
            return res.send({ status: false, msg: "All fields are required", data: [] });
        }
 
        const newQuestion = new Question({
            questionID,
            question,
            questionType,
            subject,
            chapter,
            difficulty,
            option1,
            option2,
            option3,
            option4,
            correctOption,
            explanation
        });

        await newQuestion.save()
            .then((data) => {
                return res.send({ status: true, msg: "Question added successfully", data: data });
            })
            .catch((err) => {
                console.log("err", err);
                return res.send({ status: false, msg: "Something went wrong", data: [] });
            });
    }

    // get all questions
    async getAllQuestions(req, res){
        await Question.find()
            .then((data) => {
                return res.send({ status: true, msg: "All questions", data: data });
            })
            .catch((err) => {
                console.log("err", err);
                return res.send({ status: false, msg: "Something went wrong", data: [] });
            });
    }

    // get question by ID
    async getQuestionByID(req, res){
        const { questionID } = req.body;

        if (!questionID) {
            return res.send({ status: false, msg: "Question ID is required", data: [] });
        }

        await Question.findOne({ questionID: questionID })
            .then((data) => {
                return res.send({ status: true, msg: "Question", data: data });
            })
            .catch((err) => {
                console.log("err", err);
                return res.send({ status: false, msg: "Something went wrong", data: [] });
            });
    }
}


module.exports = new Questions();