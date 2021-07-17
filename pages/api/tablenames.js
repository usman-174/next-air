const { Client } = require("pg");

const client = new Client({
  host: "evening-soiree.syncincdb.com",
  user: "ruwawhghzglgla9",
  database: "dbrfsersobl1xvv",
  password: "9-ch04KUxoN8Rw7k_iI4By0CwMmU2d-ijaluKZj9",
  port: 5432,
});
client.connect();

export default async(req,res)=>{
    const query = `SELECT table_name FROM information_schema.tables WHERE table_schema='public'
    `
    let data = await client.query(query);
    console.log(data.rows);
    let names;
    delete data.rows[0]
    res.json(data.rows.sort())
}