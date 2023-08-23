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
// router.patch("/:id", requireAuth, updateTask);
// GET routes don't require auth
router.get("/", getGroups);
router.get("/:id", getGroup);

module.exports = router;
