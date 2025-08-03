const express = require("express")
const {reg , login} = require("../controllers/userControllers.js")

const route = express.Router()



route.post("/reg" , reg)

route.post('/login' ,login)





module.exports = {route}


