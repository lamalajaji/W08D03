const tasksModel = require("./../../db/models/tasks");

///// add task funstion
const addTask = (req, res) => {
  const task = req.body;

  const neweTask = new tasksModel({
    task,
    user: req.token.id,
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

////// get user's task function :
const getTodos = (req, res) => {
  tasksModel
    .find({ user: req.token.id, isCompleted: false })
    .then((result) => {
      if (result) {
        res.sattus(200).json(result);
      } else {
        res.status(404).json({ message: "There Is No Tasks !" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


/////get a task function
const getTodo = (req, res) => {
  const { id } = req.params;
  tasksModel
    .findOne({ _id: id, user: req.token.id, isCompleted: false })
    .then((result) => {
      if (result) {
        res.sattus(200).json(result);
      } else {
        res.status(404).json({ message: "There Is No Task  !" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


////// here isCompletes == deleted tasks i just forgot to name it "deleted" 
const getCompletedTodos = (req , res) =>{
tasksModel
  .find({ user: req.token.id, isCompleted: true })
  .then((result) => {
    if (result) {
      res.sattus(200).json(result);
    } else {
      res.status(404).json({ message: "There Is No Deleted Task  !" });
    }
  })
  .catch((err) => {
    res.status(400).json(err);
  });
}

////// edit function 
const editTask = (req ,res) =>{ 
const {id} = req.params;
const task = req.body; 


tasksModel
  .findOneAndUpdate({
    _id: id,
    task,
    isCompleted: false,
  })
  .then((result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: " There Is No Task To Edit !" });
    }
  })
  .catch((err) => {
    res.status(400).json(err);
  });
}

////// delete task 
const removeTask = (req , res)=> {
  const { id } = req.params;
tasksModel
  .findOneAndUpdate(
    {
      _id: id,
      user: req.token.id,
      isCompleted: false,
    },
    { isCompleted : true}, {new : true}
  )
  .then((result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: " There Is No Task To Remove!" });
    }
  })
  .catch((err) => {
    res.status(400).json(err);
  });
}



module.exports = {
  addTask,
  getTodos,
  getTodo,
  getCompletedTodos,
  editTask,
  removeTask,
};
