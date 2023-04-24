async function db(){
    const { Client } = require('pg')
    const connectionString = 'postgres://postgres:Postgres2022!@db:5432/legal'
    const client = new Client({connectionString})
    await client.connect()
    console.log("CONECOTU MANE")
    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message) // Hello world!
    await client.end()
}

module.exports = db