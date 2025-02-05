"use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require('../../Modals');
const Question = db.question;
const Subject = db.subject;
const Chapter = db.chapter;
const { ObjectId } = require('mongodb');

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
    async getAllQuestions(req, res) {
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
    async getQuestionByID(req, res) {
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

    // delete question by ID
    async deleteQuestionByID(req, res) {
        const { id } = req.body;

        try {
            if (!id) {
                return res.send({ status: false, msg: "ID is required", data: [] });
            }

            const checkQuestion = await Question.findOne({ _id: id });
            if (!checkQuestion) {
                return res.send({ status: false, msg: "Question not found", data: [] });
            }

            await Question.deleteOne({ _id: id })
                .then((data) => {
                    return res.send({ status: true, msg: "Question deleted successfully", data: data });
                })
                .catch((err) => {
                    console.log("err", err);
                    return res.send({ status: false, msg: "Something went wrong", data: [] });
                });

        }
        catch (err) {
            console.log("err", err);
            return res.send({ status: false, msg: "Something went wrong", data: [] });
        }

    }

    // add subject
    async addSubject(req, res) {
        const { subjectName } = req.body;
        try {
            if (!subjectName) {
                return res.send({ status: false, msg: "Subject name is required", data: [] });
            }

            const newSubject = new Subject({
                subjectName: subjectName
            })

            newSubject.save()
                .then((data) => {
                    return res.send({ status: true, msg: "Subject added successfully", data: data });
                })
                .catch((err) => {
                    console.log("err", err);
                    return res.send({ status: false, msg: "Something went wrong", data: [] });
                })
        }
        catch (err) {
            console.log("err", err);
            return res.send({ status: false, msg: "Something went wrong", data: [] });
        }

    }

    // get all subjects
    async getAllSubjects(req, res) {
        try {
            await Subject.find()
                .then((data) => {
                    return res.send({ status: true, msg: "All subjects", data: data });
                })
                .catch((err) => {
                    console.log("err", err);
                    return res.send({ status: false, msg: "Something went wrong", data: [] });
                });
        }
        catch (err) {
            console.log("err", err);
            return res.send({ status: false, msg: "Something went wrong", data: [] });
        }
    }

    // add Chapter
    async addChapter(req, res) {
        const { chapterName, subjectID } = req.body;
        try {
            if (!chapterName || !subjectID) {
                return res.send({ status: false, msg: "All fields are required", data: [] });
            }

            const newChapter = new Chapter({
                chapterName: chapterName,
                subject: subjectID
            })
            newChapter.save()
                .then((data) => {
                    return res.send({ status: true, msg: "Chapter added successfully", data: data });
                })
                .catch((err) => {
                    console.log("err", err);
                    return res.send({ status: false, msg: "Something went wrong", data: [] });
                })
        }
        catch (err) {
            console.log("err", err);
            return res.send({ status: false, msg: "Something went wrong", data: [] });
        }
    }
}




module.exports = new Questions();