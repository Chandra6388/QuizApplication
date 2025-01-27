const router = require("express").Router()
const { addQuestion , getAllQuestions , getQuestionByID , deleteQuestionByID , addSubject ,addChapter } = require('../../Controller/admin/QuestionsController')

router.post("/addQuestion", addQuestion);
router.post("/getAllQuestions", getAllQuestions);
router.post("/getQuestionById", getQuestionByID);
router.post("/deleteQuestionById", deleteQuestionByID);
router.post("/addSubject", addSubject);
router.post("/addChapter", addChapter);




module.exports = router;


