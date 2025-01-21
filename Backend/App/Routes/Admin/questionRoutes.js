const router = require("express").Router()
const { addQuestion , getAllQuestions , getQuestionByID , deleteQuestionByID } = require('../../Controller/admin/QuestionsController')

router.post("/addQuestion", addQuestion);
router.post("/getAllQuestions", getAllQuestions);
router.post("/getQuestionById", getQuestionByID);
router.post("/deleteQuestionById", deleteQuestionByID);


module.exports = router;


