const mongoose = require("mongoose");
require("dotenv").config();

DB = process.env.DB;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(DB, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
