const rolesModel = require("./../../db/models/roles");

/// create role function
const newRole = (req, res) => {
  const { role, permissions } = req.body;

  const neweRole = new rolesModel({
    role,
    permissions,
  });

  neweRole
    .save()
    .then((result) => {
      result.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

///// get all roles function
const getRoles = (req, res) => {
  rolesModel
    .find({})
    .then((result) => {
      res.status(400).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { newRole, getRoles };
