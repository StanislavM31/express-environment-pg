const express = require("express");
const {getAllData} = require("../service/environment.service")
let route = express.Router();


route.get("/", async (req,res)=>{
    try {
        const data = await getAllData();
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})


module.exports = route