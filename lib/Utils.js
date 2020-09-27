const axios = require("axios");
const ConfigStore = require("configstore");
const pkge = require("../package.json");

const config = new ConfigStore(pkge.name);

class Utils {
  static axios() {
    return axios.create({
      baseURL: process.env.BASEURL,
      Authorization: Utils.getToken("token"),
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

  static setName(name) {
    config.set("username", name);
  }

  static getName(key) {
    return config.get(key);
  }

  static setEmail(email) {
    config.set("email", email);
  }

  static getEmail(key) {
    return config.get(key);
  }
}

module.exports = Utils;
