const router = require("express").Router()
const { addQuestion , getAllQuestions , getQuestionByID } = require('../../Controller/admin/QuestionsController')

router.post("/addQuestion", addQuestion);
router.post("/getAllQuestions", getAllQuestions);
router.post("/getQuestionById", getQuestionByID);


module.exports = router;


