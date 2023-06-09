

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER_DB,
  host: process.env.HOST_DB,
  database: process.env.DBNAME_DB,
  password: process.env.PWD_DB,
  port: process.env.DBNAME_DB,
});

module.exports = pool;
