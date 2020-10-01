const inquirer = require("inquirer");
const colors = require("colors");
const Utils = require("./Utils");

class User {
  constructor() {
    this._username;
    this._email;
  }

  static whoami() {
    const username = Utils.getConfig("username");
    if (!username) {
      console.log("You must be logged in to do this action");
    } else {
      console.log(`User: ${username}`.green);
    }
  }

  static async login() {
    try {
      inquirer
        .prompt([
          { type: "input", name: "username", message: "Username: " },
          { type: "input", name: "email", message: "Email: " },
          { type: "password", name: "password", message: "Password: " },
        ])
        .then(async (ans) => {
          const res = await Utils.axios().post("/auth/login", {
            username: ans.username,
            password: ans.password,
          });
          console.log(res);
          if (!Utils.getConfig("username") && !Utils.getConfig("email")) {
            Utils.setConfig("username", ans.username);
            Utils.setConfig("email", ans.email);
          }
          Utils.setConfig("userId", res.data.userData.id);
          Utils.setConfig("token", res.data.userData.access_token);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.error(error);
    }
  }

  static async logout() {
    Utils.clearConfig();
  }

  static async register() {
    try {
      inquirer
        .prompt([
          { type: "input", name: "username", message: "Username: " },
          { type: "input", name: "email", message: "Email: " },
          { type: "password", name: "password", message: "Password: " },
        ])
        .then(async (ans) => {
          const res = await Utils.axios().post("/auth/register", {
            username: ans.username,
            email: ans.email,
            password: ans.password,
          });
          // save username and email to the config file:
          Utils.setConfig("username", res.username);
          Utils.setConfig("email", res.email);

          console.log(`Registered ${ans.username} successfully!`);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = User;
