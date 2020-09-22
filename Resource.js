const axios = require("axios");

class Resource {
  constructor(name, url) {
    this.name = name || "Resource";
    this.url = url;
  }

  async ping() {
    try {
      console.log(`Pinging ${this.name}...`);
      const res = await axios.get(`https://${this.url}`);
      console.log("Status Code: ", res.status);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Resource;
