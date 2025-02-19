const express  =  require("express");
const taskRoutes = require("./routes/taskRoutes.js")
const app = express();

app.use("/",taskRoutes)

PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
