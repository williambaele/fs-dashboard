const express = require("express");
const {
  getComments,
  createComment,
  deleteComment,
} = require("../controllers/commentController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth only for create, update, and delete routes
router.post("/", requireAuth, createComment);
router.delete("/:id", requireAuth, deleteComment);

// GET routes don't require auth
router.get("/", getComments);

module.exports = router;
