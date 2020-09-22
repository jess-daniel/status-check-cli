const axios = require("axios");

module.exports = () => {
  return axios.create({
    baseURL: process.env.BASEURL,
  });
};
