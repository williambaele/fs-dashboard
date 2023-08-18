const Article = require("../models/taskModel");
const mongoose = require("mongoose");

// GET ALL TASKS
const getTasks = async (req, res) => {
  const tasks = await Task.find({}).sort({ createdAt: -1 });
  res.status(200).json(tasks);
};

// GET A SINGLE TASK
const getTask = async (req, res) => {
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

// CREATE NEW TASK
const createTask = async (req, res) => {

  const { title, text, topic, tags, user_id } = req.body;
  let emptyFields = [];

  if (!text || text.length < 200) {
    emptyFields.push("Text length must be at least 200 characters");
  }
  if (!title || title.length < 10 || title.length > 60) {
    emptyFields.push("Title length must be between 10 and 60 characters");
  }
  if (!topic) {
    emptyFields.push("Topic is not set");
  }
  if (!tags) {
    emptyFields.push("Tags is not set");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields :", emptyFields });
  }

  const taskData = { title, text, topic, tags, user:user_id };
  console.log(taskData)
  // ADD DOC TO DB
  try {
    const task = await Task.create(taskData);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A TASK
const deleteTask = async (req, res) => {
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
const updateTask = async (req, res) => {
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
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
