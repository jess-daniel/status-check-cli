const Resource = require("../Resource");

module.exports = (args) => {
  // console.log("from ping", args);
  // console.log("from ping", args._[1]);

  const resource = new Resource(args._[1], args._[2]);

  resource.ping();
};
