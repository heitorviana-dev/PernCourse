const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'heitor_viana',
  password: 'heitor142',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
});

module.exports = pool;