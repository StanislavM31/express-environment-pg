const express = require("express");
const route = require("./controller/environment.controller");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());

app.use("/environment", route);


module.exports = app