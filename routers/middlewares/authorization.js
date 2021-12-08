const rolesModel = require("./../../db/models/roles");

const authorization = async (req , res , next) =>{
    try {

        const roleId = req.token.role;
        const result = await rolesModel.findById({ _id : roleId })
            if (result.role == "Admin"){
                next();
            } else{
                res.status(403).send({ message: "Forbidden" });
            }
        
    } catch (err) {
      res.status(403).json(err);
    }
}

module.exports = authorization;
