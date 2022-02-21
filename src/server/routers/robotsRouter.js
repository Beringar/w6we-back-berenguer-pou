const express = require("express");
const authToken = require("../middlewares/auth");

const {
  getAllRobots,
  getRobot,
  deleteRobot,
  createRobot,
  updateRobot,
} = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", getAllRobots);
router.get("/:id", getRobot);
router.delete("/:id", authToken, deleteRobot);
router.post("/create", authToken, createRobot);
router.put("/update", authToken, updateRobot);

module.exports = router;
