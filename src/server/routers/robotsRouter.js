const express = require("express");
const {
  getAllRobots,
  getRobot,
  deleteRobot,
  createRobot,
  updateRobot,
} = require("../controllers/robotsControllers");

const { tokenValidation } = require("../middlewares/tokenValidation");

const router = express.Router();

router.get("/", getAllRobots);
router.get("/:id", getRobot);
router.delete("/:id", tokenValidation, deleteRobot);
router.post("/create", tokenValidation, createRobot);
router.put("/update", tokenValidation, updateRobot);

module.exports = router;
