const Resource = require("../Resource");

module.exports = (args) => {
  console.log("from ping", args);

  const name = args.n || args.name;
  const url = args.u || args.url;

  const resource = new Resource(name, url);

  resource.ping();
};
