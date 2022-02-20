const express = require("express");
const { getAllRobots, getRobot } = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", getAllRobots);

module.exports = router;
