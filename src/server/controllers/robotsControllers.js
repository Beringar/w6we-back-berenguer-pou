const Robot = require("../../db/models/Robot");

const getAllRobots = async (req, res, next) => {
  try {
    const robots = await Robot.find();
    res.json({ robots });
  } catch (error) {
    next(error);
  }
};

const getRobot = async (req, res, next) => {
  const { id } = req.params;
  try {
    const robot = await Robot.findById(id);
    if (robot) {
      res.json(robot);
      return;
    }
    const error = new Error("Robot not found!");
    next(error);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllRobots, getRobot };
