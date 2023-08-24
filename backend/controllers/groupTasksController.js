const Task = require("../models/taskModel");
const mongoose = require("mongoose");

// GET ALL GROUP'S TASKS
const getGroupTasks = async (req, res) => {
  const tasks = await Task.find({}).sort({ createdAt: -1 });
  res.status(200).json(tasks);
};

// GET A SINGLE GROUP'S TASK
const getGroupTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such task" });
  }

  const task = await Task.findById(id);

  if (!task) {
    return res.status(404).json({ error: "No such task" });
  }

  res.status(200).json(task);
};

// CREATE NEW  GROUP TASK
const createGroupTask = async (req, res) => {
  const { title, description, taskLevel, startDate, dueDate, group_id, } =
    req.body;
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!startDate) {
    emptyFields.push("start date");
  }
  if (!dueDate) {
    emptyFields.push("due date");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!taskLevel) {
    emptyFields.push("status");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Some information is missing: ", emptyFields });
  }

  const taskData = {
    title,
    description,
    taskLevel,
    startDate,
    dueDate,
    group: group_id
  };
  // ADD DOC TO DB
  try {
    const task = await Task.create(taskData);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A TASK
const deleteGroupTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such task" });
  }

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(400).json({ error: "No such task" });
  }

  res.status(200).json(task);
};

// UPDATE A TASK
const updateGroupTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such task" });
  }

  const task = await Task.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!task) {
    return res.status(400).json({ error: "No such task" });
  }

  res.status(200).json(task);
};

module.exports = {
  getGroupTasks,
  getGroupTask,
  createGroupTask,
  deleteGroupTask,
  updateGroupTask,
};
