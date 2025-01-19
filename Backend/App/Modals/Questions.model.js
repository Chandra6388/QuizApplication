const { Schema, model } = require('mongoose');

const questionModel = Schema({
    questionID: {
        type: String,
        required: true,  
    },
    question: {
        type: String,
        required: true,  
    },
    questionType: {
        type: Number,
        enum: [1, 2, 3], // 1: MCQ, 2: True/False, 3: MSQ
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    chapter: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        default: 'easy',
        required: true
    },
    option1: {
        type: String,
        required: true
    },
    option2: {
        type: String,
        required: true
    },
    option3: {
        type: String,
        required: true
    },
    option4: {
        type: String,
        required: true
    },
    correctOption: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
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
 
const Question_model = model('Question', questionModel);



module.exports = Question_model;
