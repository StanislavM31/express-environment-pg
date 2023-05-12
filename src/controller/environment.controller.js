const express = require("express");
const {getAllData} = require("../service/environment.service")
let route = express.Router();

route.get("/", async (req,res)=>{
    let data = await getAllData();
    res.send(data);
})

module.exports = route