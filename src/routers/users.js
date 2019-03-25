const express = require("express");
const Users = require("../controller/users");
const router = express.Router();

router.get("/users", Users.getUsersList);

module.exports = router;
