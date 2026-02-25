require('dotenv').config();
const express = require("express");
const {ConnectDB} = require("./db/db");
const path = require('path');
const staticRoute = require('./routes/staticRouter');

const urlRoute = require('./routes/url.router');


const app = express();
const PORT = 8001;
ConnectDB();

app.set("view engine","ejs");
app.set('views',path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/",urlRoute);
app.use("/",staticRoute);




app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`);
});
