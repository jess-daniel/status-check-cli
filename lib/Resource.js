const axios = require("axios");
const inquirer = require("inquirer");
const Utils = require("./Utils");
const User = require("./User");

class Resource {
  constructor(name, url) {
    this.name = name || "Resource";
    this.url = url;
  }

  static async getResource() {
    try {
      if (!Utils.getToken("token")) {
        console.log("You must login!");
        User.login();
      } else {
        inquirer
          .prompt([
            { type: "input", name: "resource", message: "Resource Name: " },
          ])
          .then(async (ans) => {
            // TODO: Hit the API for a single resource by name for a user
            const res = await Utils.axios().post("/api/resources/resource", {
              email: Utils.getEmail(),
              resource_name: ans.resource,
            });
            console.log("Resource", res);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async addResource(opts) {
    try {
      // console.log("flag i", opts.interval);

      const ans = await inquirer.prompt([
        { type: "input", name: "resourceName", message: "Resource Name: " },
        { type: "input", name: "resourceLink", message: "Resource Link: " },
      ]);

      const userId = Utils.getConfig("userId");

      // TODO: call to db for adding resource
      const res = await Utils.axios().post("/api/resources/", {
        name: ans.resourceName,
        link: ans.resourceLink,
        user_id: userId,
      });

      console.log("Add resource", res);
    } catch (error) {
      console.error(error);
    }
  }

  static async deleteResource() {
    // TODO: Add a get for user's resources, find one to be deleted and delete it.
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
