const router = require("express").Router()
const { getLastFiveStudentsResistered , getAllStudents , getDashbordeData} = require('../../Controller/admin/dashboardController')

router.post("/lastfive-student", getLastFiveStudentsResistered);
router.post("/getAllStudents", getAllStudents);
router.post("/getDashbordeData", getDashbordeData);



module.exports = router;


