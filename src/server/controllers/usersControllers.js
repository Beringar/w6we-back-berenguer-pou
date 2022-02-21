const debug = require("debug")("robots:server:userController");
const User = require("../../db/models/User");

const userLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    debug(user);
    if (user) {
      res.json(user);
      return;
    }
    const error = new Error("User not found!");
    error.code = 404;
    next(error);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
};
