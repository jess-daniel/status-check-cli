const User = require("../User");

module.exports = (args) => {
  // options
  const name = args.n || args.name;

  User.getResource(name);
};
