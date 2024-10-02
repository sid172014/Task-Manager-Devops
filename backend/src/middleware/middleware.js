const jwt = require('jsonwebtoken');
const {users} = require('../db/database');

const userAuthMiddleware = async(req,res,next) => {
    try{
        const token = req.headers.authorization;
        if(!token){
            throw new Error("User token does not exits / invalid");
        }
        
        const decodedData = jwt.verify(token,process.env.JWT_SECRET);
        const user = await users.findById(decodedData);

        if(!user){
            throw new Error("User no longer exists");
        }
        
        req.user = user;
        next();
    }catch(e){
        res.status(404).json({
            message : e.message
        })
    }
};

module.exports = userAuthMiddleware;