const User = require("../User");

module.exports = (args) => {
  // options
  console.log("From login");
  const username = args.U || args.username;
  const password = args.P || args.password;

  User.login(username, password);
};
