const express = require("express");
const {
  getAllRobots,
  getRobot,
  deleteRobot,
} = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", getAllRobots);
router.get("/:id", getRobot);
router.delete("/:id", deleteRobot);

module.exports = router;
