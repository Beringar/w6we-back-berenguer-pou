const jwt = require("express-jwt");

const tokenValidation = jwt({
  secret: "cornwall",
  algorithms: ["HS256"],
  credentialsRequired: false,
  getToken: function fromHeaderOrQuerystring(req) {
    if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  },
});

module.exports = { tokenValidation };
