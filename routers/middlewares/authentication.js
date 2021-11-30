const jwt = require("jsonwebtoken");
require("dotenv").config();



const Secret = process.env.SECRET;


const authentication = (req , res , next) =>{
    try{
        if (!req.header.authentication){
            return res.status(403).json({message: "Forbidden!"})
        }
        const token = req.headers.authorization.split(" ")[1];
        const parsedToken = jwt.verify(token, Secret);

        next();

    }catch(err){
        res.status(403).json(err)

    }
}

module.exports = authentication;
