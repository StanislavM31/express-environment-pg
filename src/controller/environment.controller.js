const express = require('express');
const { getAllData, getDataById, createData, deleteDataById, updateDataById } = require('../service/environment.service');
const { isValidId, isValidBody } = require('../helper/validation');
const buildResponse = require('../helper/buildResponse');
let route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getAllData();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getDataById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});
route.post('/', isValidBody, async (req, res) => {
  try {
    const { label, category, priotity } = req.body;
    const data = await createData(label, category, priotity);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidBody, async (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priotity } = req.body;
    const data = await updateDataById(id, label, category, priotity);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, `ошибка при обновлении: ${error.message}`);
  }
});

route.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteDataById(id);
    res.send(data);
  } catch (error) {
    res.send('ошибка при удалении');
  }
});

module.exports = route;
