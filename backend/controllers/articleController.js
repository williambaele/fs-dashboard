const Article = require('../models/articleModel')
const mongoose = require('mongoose')

// get all items
const getArticles = async (req, res) => {

  // const user_id = req.user._id
  const articles = await Article.find({}).sort({createdAt: -1})

  res.status(200).json(articles)
}

// get a single item
const getArticle = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such item'})
  }

  const article = await Article.findById(id)

  if (!article) {
    return res.status(404).json({error: 'No such item'})
  }

  res.status(200).json(article)
}


// create new item
const createArticle = async (req, res) => {
  const {text} = req.body

  let emptyFields = []

  if(!text) {
    emptyFields.push('text')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const article = await Article.create({text, user_id})
    res.status(200).json(article)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete an item
const deleteArticle = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such item'})
  }

  const article = await Article.findOneAndDelete({_id: id})

  if (!article) {
    return res.status(400).json({error: 'No such item'})
  }

  res.status(200).json(article)
}

// update a item
const updateArticle = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such item'})
  }

  const article = await Article.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!article) {
    return res.status(400).json({error: 'No such item'})
  }

  res.status(200).json(article)
}


module.exports = {
  getArticles,
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle
}
