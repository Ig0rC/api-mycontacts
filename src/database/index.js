const { Client } = require('pg');
require('dotenv').config();

console.log({
  host: process.env.HOST_DATABASE,
  port: process.env.PORT_DATABASE,
  user: process.env.USER_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.NAME_DATABASE,
});

const client = new Client({
  host: '172.31.144.1',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();
console.log('connect');
exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);

  return rows;
};

exports.client = client;
