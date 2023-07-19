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
  const {title, brand, size, price, description, state, colors} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!colors) {
    emptyFields.push('colors')
  }
  if(!brand) {
    emptyFields.push('brand')
  }
  if(!size) {
    emptyFields.push('size')
  }
  if(!description) {
    emptyFields.push('description')
  }
  if(!price) {
    emptyFields.push('price')
  }
  if(!state) {
    emptyFields.push('state')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const article = await Article.create({title, brand, size, price, state, colors, description, user_id})
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
