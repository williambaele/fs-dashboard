const Comment = require("../models/commentModel");
const mongoose = require("mongoose");

// GET ALL ARTICLES
const getComments = async (req, res) => {
  const comments = await Comment.find({}).sort({ createdAt: -1 });
  res.status(200).json(comments);
};

// CREATE NEW COMMENT
const createComment = async (req, res) => {
  const { content, user_id } = req.body;
  let emptyFields = [];

  if (!content) {
    emptyFields.push("Comment can't be empty");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields :", emptyFields });
  }

  const commentData = { content, user: user_id };
  // ADD DOC TO DB
  try {
    const comment = await Comment.create(commentData);
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A COMMENT
const deleteComment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such comment" });
  }

  const comment = await Comment.findOneAndDelete({ _id: id });

  if (!comment) {
    return res.status(400).json({ error: "No such comment" });
  }

  res.status(200).json(comment);
};

module.exports = {
  getComments,
  createComment,
  deleteComment,
};
