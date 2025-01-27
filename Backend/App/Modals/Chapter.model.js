const {model , Schema, default: mongoose} = require('mongoose');

const chapterModel = Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    chapterName: {
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
    }
);

const Chapter_model = model('Chapter', chapterModel);

module.exports = Chapter_model;