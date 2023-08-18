const express = require("express");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth only for create, update, and delete routes
router.post("/", requireAuth, createTask);
router.delete("/:id", requireAuth, deleteTask);
router.patch("/:id", requireAuth, updateTask);

// GET routes don't require auth
router.get("/", getTasks);
router.get("/:id", getTask);

module.exports = router;
