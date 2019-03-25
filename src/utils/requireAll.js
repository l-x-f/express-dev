const fs = require("fs");
function requireAll(path, excludeFiles = ["index.js", "requireAll.js"]) {
  let data = fs
    .readdirSync(path)
    .filter(value => {
      console.log(value, "val");
      return !excludeFiles.includes(value); //过滤文件
    })
    .map(value => {

      console.log(value,"value")

      let  name=(value.charAt(0).toUpperCase()+value.substring(1)).split(".")[0]
      console.log(name,"name")
      return { data: require("./" + value), value: value.split(".")[0] };
    });

  let res = {};
  data.forEach(val => {
    console.log(val.name,"v")
    res[val.value] = val.data;
  });

  return res;
}
module.exports = requireAll;
