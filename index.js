require('dotenv').config();
const express = require("express");
const {ConnectDB} = require("./db/db");

const urlRoute = require('./routes/url.router');


const app = express();
const PORT = 8001;
ConnectDB();

app.use("/",urlRoute);


app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`);
});
