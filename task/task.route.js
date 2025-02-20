const express = require("express");
const taskController = require("./task.controller");
const router = express.Router();

router.get("/task",taskController)

module.exports =  router;