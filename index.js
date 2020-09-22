const minimist = require("minimist");
require("dotenv").config();
require("dotenv").config();

module.exports = () => {
  const args = minimist(process.argv.slice(2));

  let cmd = args._[0] || "help";

  if (args.help || args.h) {
    cmd = "help";
  } else if (args.ping || args.p) {
    cmd = "ping";
  } else if (args.version || args.v) {
    cmd = "version";
  } else if (args.login || args.l) {
    cmd = "login";
  } else if (args.register || args.r) {
    cmd = "register";
  }

  switch (cmd) {
    case "ping":
      require("./cmds/ping")(args);
      break;
    case "help":
      require("./cmds/help")(args);
      break;
    case "version":
      require("./cmds/version")();
      break;
    case "login":
      require("./cmds/login")(args);
      break;
    case "register":
      require("./cmds/register")(args);
      break;
    default:
      console.error(`${cmd} is not a valid command. Run --help or -h`);
      break;
  }
};
