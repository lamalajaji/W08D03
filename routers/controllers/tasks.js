const tasksModel = require("./../../db/models/tasks");


///// add task funstion 
const addTask = (req, res) => {

const { id } = req.params;
  const task = req.body.task;

  const neweTask = new tasksModel({
    task,
    user: req.id,
  });

  neweTask
    .save()
    .then((result) => {
      result.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  
};


module.exports = { addTask };

