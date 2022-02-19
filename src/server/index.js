require("dotenv").config();
const debug = require("debug")("robots:server");
const chalk = require("chalk");
const express = require("express");

const app = express();

const startServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Server listening on port ${port}`));
      resolve();
    });

    server.on("error", (error) => {
      reject(error);
    });
  });

module.exports = startServer;
