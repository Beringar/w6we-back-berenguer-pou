const express = require("express");
const getAllRobots = require("../controllers/robotsControllers");

const router = express.Router();

router.get("/", getAllRobots);

module.exports = router;
