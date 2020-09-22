const Resource = require("../Resource");

module.exports = (args) => {
  // options
  const name = args.n || args.name;
  const url = args.u || args.url;

  const resource = new Resource(name, url);
  console.log(resource);

  resource.ping();
};
