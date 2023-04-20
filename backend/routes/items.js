// const express = require('express')
// const {
//   createItem,
//   getItems,
//   getItem,
//   deleteItem,
//   updateItem
// } = require('../controllers/itemController')
// const requireAuth = require('../middleware/requireAuth')

// const router = express.Router()

// // require auth for all workout routes
// router.use(requireAuth)

// // GET all workouts
// router.get('/', getItems)

// //GET a single workout
// router.get('/:id', getItem)

// // POST a new workout
// router.post('/', createItem)

// // DELETE a workout
// router.delete('/:id', deleteItem)

// // UPDATE a workout
// router.patch('/:id', updateItem)


// module.exports = router
const express = require('express')
const {
  createItem,
  getItems,
  getItem,
  deleteItem,
  updateItem
} = require('../controllers/itemController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth only for create, update, and delete routes
router.post('/', requireAuth, createItem)
router.delete('/:id', requireAuth, deleteItem)
router.patch('/:id', requireAuth, updateItem)

// GET routes don't require auth
router.get('/', getItems)
router.get('/:id', getItem)

module.exports = router
