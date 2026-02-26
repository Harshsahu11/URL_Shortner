const User = require('../models/user.model');
const {v4: uuidv4} = require('uuid');
const { setUser } = require('../service/auth.service');

async function handleUSerSignup(req,res){
    const {name , email, password} = req.body;

    if(!name || !email || !password){
        return res.render('signup');
    }

    await User.create({
        name,
        email,
        password,
    });

    return res.redirect('/');
}

async function handleUserLogin(req,res){
    const {email, password} = req.body;
    const user = await User.findOne({email,password});

    if(!user){
        return res.render('login',{
            error: "Invalid username or Password",
        });
    }

    // const sessionId = uuidv4(); --------StateFul
    // setUser(sessionId, user);
    // res.cookie('uid',sessionId);

    const token = setUser(user);
    res.cookie("uid",token);
    return res.redirect('/');
}

module.exports = {
    handleUSerSignup,
    handleUserLogin
}