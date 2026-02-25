require('dotenv').config();
const express = require("express");
const {ConnectDB} = require("./db/db");

const urlRoute = require('./routes/url.router');


const app = express();
const PORT = 8001;
ConnectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",urlRoute);
app.get("./:shortId",(req,res)=>{

})

app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`);
});
