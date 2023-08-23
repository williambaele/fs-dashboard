const express = require("express");
const {
  getGroups,
  createGroup,
  getGroup,
  deleteGroup,
} = require("../controllers/groupController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.post("/", requireAuth, createGroup);
router.delete("/:id", requireAuth, deleteGroup);
router.patch("/:id", requireAuth, updateTask);
router.get("/", requireAuth, getGroups);
router.get("/:id", requireAuth, getGroup);

module.exports = router;
