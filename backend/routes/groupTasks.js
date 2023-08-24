const express = require("express");
const {
  createGroupTask,
  getGroupTasks,
  getGroupTask,
  deleteGroupTask,
  updateGroupTask,
} = require("../controllers/groupTasksController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth only for create, update, and delete routes
router.post("/", requireAuth, createGroupTask);
router.delete("/:id", requireAuth, deleteGroupTask);
router.patch("/:id", requireAuth, updateGroupTask);

// GET routes don't require auth
router.get("/", getGroupTasks);
router.get("/:id", getGroupTask);

module.exports = router;
