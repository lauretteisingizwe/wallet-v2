const {Client} = require('pg');    
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "WALLET"
})
client.connect();
console.log(client);
module.exports = client

