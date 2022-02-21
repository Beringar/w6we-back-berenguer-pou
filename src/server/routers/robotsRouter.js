const express = require("express");
const {
  getAllRobots,
  getRobot,
  deleteRobot,
  createRobot,
} = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", getAllRobots);
router.get("/:id", getRobot);
router.delete("/:id", deleteRobot);
router.post("/create", createRobot);

module.exports = router;
