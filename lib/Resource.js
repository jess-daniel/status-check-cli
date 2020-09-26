const axios = require("axios");

class Resource {
  constructor(name, url) {
    this.name = name || "Resource";
    this.url = url;
  }

  static async ping(uri) {
    try {
      console.log(`Pinging ${uri}...`);
      const res = await axios.get(`https://${uri}`);
      console.log("Status Code: ", res.status);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Resource;
