const express = require("express");
// const taskController = require("../controllers/18_02_taskController");
const taskController = require("../controllers/19_02_taskController")
const router = express.Router();

router.get("/task",taskController)

module.exports =  router;