const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

router.get("/task",taskController)

module.exports =  router;