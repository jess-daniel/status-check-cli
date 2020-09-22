const axios = require("./utils/axios");

class User {
  static async login(username, password) {
    try {
      const res = await axios().post("/auth/login", { username, password });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  static async register(username, email, password) {
    try {
      const res = await axios().post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      // TODO: Save the token locally in a file, securely??
    } catch (error) {}
  }
}

module.exports = User;
