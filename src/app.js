const express = require("express");
const route = require("./controller/environment.controller");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());

app.use("/environment", route);

/* console.log(route); */

app.use((er, req, res, next)=>{
    res.send(er.message);
})

module.exports = app