require('dotenv').config();
const express = require("express");
const {ConnectDB} = require("./db/db");



const app = express();
const PORT = 8001;
ConnectDB();


app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`);
});
