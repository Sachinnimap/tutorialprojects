const express  =  require("express");
const task_route = require("./task/index")
const app = express();

app.use("/",task_route)
app.use((err,req,res,next)=>{
    res.status(500).json({error:err})
})

PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
