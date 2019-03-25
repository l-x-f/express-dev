const AuthModel = require("../models/auth");
const { SendTools } = require("../utils/index");

class Auth {
  // 注册
  static async register(req, res, next) {
    try {
      if (req.body.username && req.body.password) {
        let result = await AuthModel.register(req.body);
        res.json(SendTools.sendData(result, {}));
      } else {
        res.json(SendTools.sendError("请完整填写表单"));
      }
    } catch (error) {
      res.json(SendTools.sendError(error));
    }
  }

  // 登录
  static async login(req, res, next) {
    try {
      if (req.body.username && req.body.password) {
        let result = await AuthModel.login(req.body);
        res.json(SendTools.sendData(result[0], {}));
      } else {
        res.json(SendTools.sendError("请完整填写表单"));
      }
    } catch (error) {
      res.json(error);
      // res.redirect("/login");
    }
  }
}

module.exports = Auth;
