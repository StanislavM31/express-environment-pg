const express = require("express");
const {
  getAllData,
  getDataById,
  createData,
  deleteDataById
} = require("../service/environment.service");
let route = express.Router();

route.get("/", async (req, res) => {
  try {
    const data = await getAllData();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getDataById(id);
    res.send(data);
  } catch (error) {}
});
route.post("/", async (req, res) => {
  try {
    const {label, category, priotity} = req.body;
    const data = await createData(label, category, priotity);
    res.send(data);
  } catch (error) {}
});

route.delete("/:id",async (req,res)=>{
  try {
    const {id} = req.params;
    const data = await deleteDataById(id);
    res.send(data);
  } catch (error) {
    res.send('ошибка при удалении')
  }
} )

module.exports = route;
