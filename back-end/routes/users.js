const express = require("express")
const userControllers = require("../controllers/users")
const router = express.Router()
const checkToken = require("../controllers/checkToken");


router.post("/users/", checkToken.checkToken, userControllers.postUsers)
router.get("/users/:id", checkToken.checkToken, userControllers.getUserByUserId)
router.post("/login", userControllers.login)

module.exports = router