const inquirer = require("inquirer");
const Utils = require("./Utils");

class User {
  constructor() {
    this._username;
    this._email;
  }

  get username() {
    return this._username;
  }

  set username(username) {
    this._username = username;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
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
          if (!Utils.getName("username") && !Utils.getEmail("email")) {
            Utils.setName(ans.username);
            Utils.setEmail(ans.email);
          }
          Utils.setToken(res.data.token);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.error(error);
    }
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
          Utils.setName(res.username);
          Utils.setEmail(res.email);

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
