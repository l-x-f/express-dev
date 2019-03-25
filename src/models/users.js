const db = require("../db");
const { Errorlog } = require("../utils/index");
class UsersModel {
  // 获取用户列表
  static getUsersList() {
    return new Promise((resolve, reject) => {
      const sqlStr = "select * from  users";
      db.query(sqlStr, async (error, result) => {
        if (error) {
          await Errorlog(error, "users");
          reject(error);
        }
        resolve(result);
      });
    });
  }
}

module.exports = UsersModel;
