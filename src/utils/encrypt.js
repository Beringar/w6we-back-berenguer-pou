require("dotenv").config();
const debug = require("debug")("robots:utils:encrypt");
const bcrypt = require("bcrypt");

(async () => {
  const encryptedPassword = await bcrypt.hash("asasas", 10);
  debug(`Encrypted password: ${encryptedPassword}`);
})();
