const express = require("express");
const route = express.Router();

const userCtrl = require("../controllers/users");

route.post("/signup", userCtrl.signup);
route.post("/login", userCtrl.login);

module.exports = route;
