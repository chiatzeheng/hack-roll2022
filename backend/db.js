const { Client } = require("pg");

const client = new Client({
  host: "containers-us-west-65.railway.app",
  port: 7669,
  user: "postgres",
  password: "n17XZATgRt20oE17RiaH",
});

client.connect();

module.exports = client;
