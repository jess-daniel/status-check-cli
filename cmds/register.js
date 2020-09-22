const User = require("../User");

module.exports = (args) => {
  // options
  console.log("from register");
  const username = args.U || args.username;
  const password = args.P || args.password;
  const email = args.E || args.email;

  User.register(username, email, password);
};
