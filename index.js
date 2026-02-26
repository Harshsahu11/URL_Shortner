require('dotenv').config();
const express = require("express");
const {ConnectDB} = require("./db/db");
const path = require('path');
const cookieParser = require('cookie-parser');
const {restrictToLoggedin,checkAuth} = require('./middlewares/auth.middleware');
const { handleShortID } = require("./controllers/url.controller");

const staticRoute = require('./routes/staticRouter');
const urlRoute = require('./routes/url.router');
const userRoute = require('./routes/user.router');


const app = express();
const PORT = 8001;
ConnectDB();

app.set("view engine","ejs");
app.set('views',path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use("/url",restrictToLoggedin,urlRoute);
app.use("/user",userRoute);
app.use("/",checkAuth,staticRoute);
app.get("/:shortId",handleShortID);




app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`);
});
