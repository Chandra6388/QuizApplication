const router = require("express").Router()
const { getLastFiveStudentsResistered} = require('../../Controller/admin/dashboardController')

router.post("/lastfive-student", getLastFiveStudentsResistered);


module.exports = router;


