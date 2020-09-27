#!/usr/bin/env node
const { program } = require("commander");
const { version } = require("../package.json");
const Resource = require("../lib/Resource");
const User = require("../lib/User");
require("dotenv").config();

program.version(version);
//   .option("-p, --ping", "Quickly get the status code of an online resource");

// NOTE: Top level CLI commands
program
  .command("ping <uri>")
  .description("Ping a uri")
  .action(async (uri) => {
    await Resource.ping(uri);
  });

program
  .command("login")
  .description("Login to the Status Check system")
  .action(async () => {
    await User.login();
  });

program
  .command("register")
  .description("Register a new account")
  .action(async () => {
    await User.register();
  });

program
  .command("add")
  .description("add a resource to be monitored")
  .option(
    "-i, --interval <interval>",
    "Set the interval to update the status of the resource"
  )
  .action(async (cmd) => {
    await Resource.addResource(cmd);
  });

program
  .command("check <resource_name>")
  .description("Check the status of a stored resource")
  .action(async () => {
    await Resource.getResource();
  });

program.parse(process.argv);
