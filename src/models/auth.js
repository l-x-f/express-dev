const db = require("../db");
const { Errorlog } = require("../utils/index");
class AuthModel {
  // 注册
  static register(requestData) {
    return new Promise((resolve, reject) => {
      // 检验用户名是否被占用
      db.query(
        "select count(*) as count  from users where username=?",
        requestData.username,
        async (error, results) => {
          if (error) {
            await Errorlog(error, "register");
            reject(error);
          }
          // 用户名被占用
          if (results[0].count !== 0) {
            await Errorlog(error, "register");
            reject("用户名被占用");
          } else {
            db.query(
              "insert into users set ?",
              requestData,
              async (error, results) => {
                if (error) {
                  await Errorlog(error, "register");
                  reject(error);
                }
                if (results.affectedRows !== 1) {
                  await Errorlog(error, "register");
                  reject(error);
                }
                resolve(results);
              }
            );
          }
        }
      );
    });
  }
  // 登录
  static login(requestData) {
    return new Promise((resolve, reject) => {
      // 创建一条SQL语句，用来查询用户是否存在
      const sqlStr = "select * from users where username=? and password=?";
      // 执行SQL语句，进行登录的判断
      db.query(
        sqlStr,
        [requestData.username, requestData.password],
        (error, results) => {
          if (error) {
            reject(error);
          }
          // 没有查询到注册信息
          if (results.length !== 1) {
            reject("未注册");
          }
          resolve(results);
        }
      );
    });
  }
}

module.exports = AuthModel;
