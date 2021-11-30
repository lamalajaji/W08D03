const express = require("express");
require("dotenv").config();
const app = express();



PORT= process.env.PORT || 4000; 







app.listen(PORT, () => {
  console.log(`Server Started On ${PORT}`);
});