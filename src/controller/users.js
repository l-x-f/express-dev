const UsersModel = require("../models/users");
const { SendTools } = require("../utils/index");
console.log(SendTools)
class Users {
  static async getUsersList(req, res, next) {
    try {
      let result = await UsersModel.getUsersList();
      res.json(SendTools.sendList(result, {}));
    } catch (error) {
      res.json(SendTools.sendError(error));
      // res.redirect("/login");
    }
  }
}

module.exports = Users;
