const { model, Schema } = require('mongoose');

const subjectModel = Schema({
    subjectName: {
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

}
    ,
    {

        timestamps: true
        ,
    }
);

const Subject_model = model('Subject', subjectModel);

module.exports = Subject_model;
