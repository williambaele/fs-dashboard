const express = require('express')
const {
  createArticle,
  getArticles,
  getArticle,
  deleteArticle,
  updateArticle
} = require('../controllers/articleController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth only for create, update, and delete routes
router.post('/', requireAuth, createArticle)
router.delete('/:id', requireAuth, deleteArticle)
router.patch('/:id', requireAuth, updateArticle)

// GET routes don't require auth
router.get('/', getArticles)
router.get('/:id', getArticle)

module.exports = router
