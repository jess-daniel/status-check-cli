const axios = require("axios");
const ConfigStore = require("configstore");
const pkge = require("../package.json");

const config = new ConfigStore(pkge.name);

class Utils {
  static axios() {
    return axios.create({
      baseURL: "http://localhost:5000",
      Authorization: Utils.getConfig("token"),
    });
  }

  static setConfig(key, data) {
    config.set(key, data);
  }

  static getConfig(key) {
    return config.get(key);
  }

  static deleteConfig(key) {
    config.delete(key);
  }

  static clearConfig() {
    config.clear();
  }
}

module.exports = Utils;
