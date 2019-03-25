const express = require("express");
const router = require("./src/routers");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
// cors  congfig
app.use(cors());
// register  router

// all  request config
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
  res.header("X-Powered-By", "4.16.4");
  res.header("Content-Type", "application/json;charset=utf-8");
  // options  request  special
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

router(app);
app.listen(4000, () => console.log("server runing: http://127.0.0.1:4000"));
