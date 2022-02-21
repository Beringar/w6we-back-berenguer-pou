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
    error.code = 404;
    next(error);
  } catch (error) {
    error.message = "Invalid id!";
    error.code = 400;
    next(error);
  }
};

const deleteRobot = async (req, res, next) => {
  const { id } = req.params;
  try {
    const robot = await Robot.findByIdAndDelete(id);
    if (robot) {
      res.json({ id: robot.id });
      return;
    }
    const error = new Error("Id not found!");
    next(error);
  } catch (error) {
    next(error);
  }
};

const createRobot = async (req, res, next) => {
  const robot = req.body;
  try {
    const newRobot = await Robot.create(robot);
    res.json(newRobot);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllRobots, getRobot, deleteRobot, createRobot };
