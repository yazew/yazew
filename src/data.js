const config = require('dotenv').config().parsed
const Pool = require('pg').Pool
const url = require('url')
const params = url.parse(process.env.DATABASE_URL)
const auth = params.auth.split(':')

const db_config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: true
};
const pool = new Pool(db_config);
module.exports.Data = {
  tips: async () => {
    try {
      let result = await pool.query('select * from tips')
      return result.rows
    } catch (error) {
      throw error
    }
  }
}