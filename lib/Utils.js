const axios = require("axios");
const ConfigStore = require("configstore");
const pkge = require("../package.json");

const config = new ConfigStore(pkge.name);

class Utils {
  static axios() {
    return axios.create({
      baseURL: process.env.BASEURL,
    });
  }
  static setToken(token) {
    config.set("token", token);
  }

  static getToken(key) {
    return config.get(key);
  }

  static clearToken(key) {
    config.delete(key);
  }
}

module.exports = Utils;
