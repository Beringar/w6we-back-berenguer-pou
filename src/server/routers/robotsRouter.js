const express = require("express");
const { getAllRobots, getRobot } = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", getAllRobots);
router.use("/:id", getRobot);

module.exports = router;
