const rolesModel = require("./../../db/models/roles");

const authorization = async (req , res , next) =>{
    try {

        const roleId = req.token.role;
        const result = await rolesModel.findById({ roleId })
            if (result.role == "Admin"){
                next();
            } else{
                res.status(403).json({ message: "Forbidden" });
            }
        
    } catch (err) {
      res.status(403).json(err);
    }
}

module.exports = authorization;
