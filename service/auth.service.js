
// ----------StateFull-------------
// const sessionIdToUserMap = new Map();   --stateful
// function setUser(id, user){
//     sessionIdToUserMap.set(id, user);
// }

// function getUser(id){
//     return sessionIdToUserMap.get(id);
// }

// ----------StateLess ------------------
const jwt = require('jsonwebtoken');
const secret = "Hello Harsh Sahu@#$"

function setUser( user){
    return jwt.sign(user,secret);
}

function getUser(token){
    if(!token) return null;
    return jwt.verify(token,secret);
}



module.exports = {
    setUser,
    getUser
}