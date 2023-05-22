const pool = require('../db');

async function getAllDataDB() {
  const client = await pool.connect();
  const sql = `SELECT * FROM environment`;
  const result = (await client.query(sql)).rows;
  return result;
}

async function getDataByIdDB(id) {
  const client = await pool.connect();
  const sql = `SELECT * FROM environment WHERE id = $1`;
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function createDataDB(label, category, priotity) {
  const client = await pool.connect();
  const sql = `INSERT INTO environment(label, category, priotity) values ($1, $2, $3) returning *`;
  const result = (await client.query(sql, [label, category, priotity])).rows;
  return result;
}
async function updateDataDB(id, label, category, priotity) {
  const client = await pool.connect();
  const sql = `UPDATE environment SET label=$1, category=$2, priotity=$3 WHERE id = $4 returning *`;
  const result = (await client.query(sql, [label, category, priotity, id])).rows;
  return result;
}

async function deleteDataDB(id) {
  const client = await pool.connect();
  const sql = `DELETE FROM environment WHERE id = $1`;
  const result = (await client.query(sql, [id])).rows;
  const sql1 = `SELECT * FROM environment`;

  const rez = (await client.query(sql1)).rows;
  return rez;
}
module.exports = {
  getAllDataDB,
  getDataByIdDB,
  createDataDB,
  deleteDataDB,
  updateDataDB,
};
