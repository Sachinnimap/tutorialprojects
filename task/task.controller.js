const path = require("path");
const os = require("os");
const fs = require("fs")

const taskController = async(req,res) => {
        // throw new Error("error in task controller")
    res.status(200).json("success")
}
module.exports  = taskController;