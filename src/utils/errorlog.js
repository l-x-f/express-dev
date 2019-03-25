const dayjs = require("dayjs");
const fs = require("fs");
const path = require("path");
function resolvePath(dirType = "error") {
  return path.join(__dirname, `../logs/${dirType}.error.log.txt`);
}
async function errorlog(error, dirType) {
  const data = `${error}  ${dayjs().format("YYYY-MM-DD HH:mm:ss")}\n`;
  return new Promise((resolve, reject) => {
    fs.writeFile(resolvePath(dirType), data, err => {
      err ? reject(err) : "";
      console.log("文件已保存");
      resolve();
    });
  });
}

module.exports = errorlog;
