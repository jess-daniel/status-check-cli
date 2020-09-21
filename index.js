#!/usr/bin/env node

const minimist = require("minimist");

module.exports = () => {
  const args = minimist(process.argv.slice(2));

  let cmd = args._[0];

  switch (cmd) {
    case "ping":
      require("./cmds/ping")(args);
      break;
    default:
      console.error(`${cmd} not found`);
      break;
  }
};
