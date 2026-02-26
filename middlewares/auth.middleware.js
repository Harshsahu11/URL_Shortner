const { getUser } = require('../service/auth.service');

async function restrictToLoggedin(req,res,next){
    const useruid = req.cookies?.uid;

    if(!useruid){
        return res.redirect('/login');
    }

    const user = getUser(useruid);

    if(!user) return res.redirect('/login');

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedin
}