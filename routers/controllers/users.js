const usersModel = require("./../../db/models/users");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT = Number(process.env.SALT);

const Secret = process.env.SECRET;

//// signUp function
const signUp = async (req, res) => {
  const { email, passowrd, role } = req.body;

  const hashPass = await bcrypt.hash(passowrd, SALT);

  const newUSer = new usersModel({
    email: email.toLowerCase(),
    passowrd: hashPass,
    role,
  });
  newUSer
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

////// login function
const login = (req, res) => {
  const { email, passowrd } = req.body;
  const savedEmail = email.toLowerCase();

  usersModel
    .findOne({ email: savedEmail })
    .then(async (result) => {
      if (result) {
        if (result.email == email) {
          const savedPassword = await bcrypt.compare(passowrd, result.passowrd);
          const payload = {
            email,
            role : result.role,
            id : result._id
            
          };

          if (savedPassword) {
            let token = jwt.sign(payload, Secret);
            res.status(200).json({ result, token });
            console.log(payload);
          } else {
            res.status(400).json("Wrong email or password!");
          }
        } else {
          res.status(400).json("Wrong email or password!");
        }
      } else {
        res.status(404).json("Email does not exist!");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

///// get All users function:
const getAllUsers = (req, res) => {
  usersModel
    .find({})
    .then((result) => {
      
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

////// delete users function : 
const deleteUser = (req, res) => {
    const {id} = req.params;

  usersModel
    .findOneAndDelete({ _id: id })
    .then(() => {
      res.status(200).send("this user has been removed!");
     
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = { signUp, login, getAllUsers, deleteUser };
