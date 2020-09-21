const minimist = require("minimist");

module.exports = () => {
  const args = minimist(process.argv.slice(2));

  let cmd = args._[0] || "help";

  if (args.help || args.h) {
    cmd = "help";
  } else if (args.ping || args.p) {
    cmd = "ping";
  }

  switch (cmd) {
    case "ping":
      require("./cmds/ping")(args);
      break;
    case "help":
      console.log("Help has been ran");
      break;
    default:
      console.error(`${cmd} not found`);
      break;
  }
};
