const debug = require("debug")("robots:database");
const chalk = require("chalk");
const mongoose = require("mongoose");

const connectToMongoDB = (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionString, (error) => {
      if (error) {
        reject(error);
        return;
      }
      debug(chalk.greenBright(`Robots Database connected`));
      resolve();
    });
  });
module.exports = connectToMongoDB;
