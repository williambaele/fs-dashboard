const Article = require("../models/articleModel");
const mongoose = require("mongoose");

// GET ALL ARTICLES
const getArticles = async (req, res) => {
  const articles = await Article.find({}).sort({ createdAt: -1 });
  res.status(200).json(articles);
};

// GET A SINGLE ARTICLE
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

  const articleData = { title, text, topic, tags, user:user_id };
  console.log(articleData)
  // ADD DOC TO DB
  try {
    const article = await Article.create(articleData);
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE AN ARTICLE
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

// UPDATE AN ARTICLE
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
