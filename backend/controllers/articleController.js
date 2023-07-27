const Article = require("../models/articleModel");
const mongoose = require("mongoose");
import { useAuthContext } from "./hooks/useAuthContext";

// get all articles
const getArticles = async (req, res) => {
  // const user_id = req.user._id
  const articles = await Article.find({}).sort({ createdAt: -1 });

  res.status(200).json(articles);
};

// get a single article
const getArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such article" });
  }

  const article = await Article.findById(id);

  if (!article) {
    return res.status(404).json({ error: "No such article" });
  }

  res.status(200).json(article);
};

// CREATE NEW ARTICLE
const createArticle = async (req, res) => {

  const user_id = req.user._id;

  const { title, text, topic, tags } = req.body;

  let emptyFields = [];

  if (!text) {
    emptyFields.push("text");
  }
  if (!title) {
    emptyFields.push("title");
  }
  if (!topic) {
    emptyFields.push("topic");
  }
  if (!tags) {
    emptyFields.push("tags");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    const user_id = user._id;
    const article = await Article.create({ title, text, topic, tags, user_id });
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an article
const deleteArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such article" });
  }

  const article = await Article.findOneAndDelete({ _id: id });

  if (!article) {
    return res.status(400).json({ error: "No such article" });
  }

  res.status(200).json(article);
};

// update a article
const updateArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such article" });
  }

  const article = await Article.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!article) {
    return res.status(400).json({ error: "No such article" });
  }

  res.status(200).json(article);
};

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle,
};
