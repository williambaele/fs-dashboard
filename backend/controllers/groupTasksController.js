const GroupTask = require("../models/groupTaskModel");
const mongoose = require("mongoose");

// GET ALL GROUP'S TASKS
const getGroupTasks = async (req, res) => {
  const groupTasks = await GroupTask.find({}).sort({ createdAt: -1 });
  res.status(200).json(groupTasks);
};

// GET A SINGLE GROUP'S TASK
const getGroupTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such group task" });
  }

  const groupTask = await GroupTask.findById(id);

  if (!groupTask) {
    return res.status(404).json({ error: "No such group task" });
  }

  res.status(200).json(groupTask);
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

  const groupTaskData = {
    title,
    description,
    taskLevel,
    startDate,
    dueDate,
    group: group_id
  };
  // ADD DOC TO DB
  try {
    const groupTask = await GroupTask.create(groupTaskData);
    res.status(200).json(groupTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A TASK
const deleteGroupTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such group task" });
  }

  const groupTask = await Task.findOneAndDelete({ _id: id });

  if (!groupTask) {
    return res.status(400).json({ error: "No such groupTask" });
  }

  res.status(200).json(groupTask);
};

// UPDATE A TASK
const updateGroupTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such groupTask" });
  }

  const groupTask = await GroupTask.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!groupTask) {
    return res.status(400).json({ error: "No such groupTask" });
  }

  res.status(200).json(groupTask);
};

module.exports = {
  getGroupTasks,
  getGroupTask,
  createGroupTask,
  deleteGroupTask,
  updateGroupTask,
};
