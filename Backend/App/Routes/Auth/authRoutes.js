const router = require("express").Router()
const { login} = require('../../Controller/auth/authController')

router.post("/login", login);


module.exports = router;


