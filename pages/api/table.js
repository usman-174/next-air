import Airtable from "airtable";
const { Client } = require("pg");

const client = new Client({
  host: "evening-soiree.syncincdb.com",
  user: "ruwawhghzglgla9",
  database: "dbrfsersobl1xvv",
  password: "9-ch04KUxoN8Rw7k_iI4By0CwMmU2d-ijaluKZj9",
  port: 5432,
});
client.connect();
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

export default async (req, res) => {
  //   const table = base('Vehicle Graphics');
  try {
    console.log(process.env.AIRTABLE_API_KEY, process.env.AIRTABLE_BASE_ID);
    //   const record = await table.select({}).firstPage()
    const query = `SELECT * FROM vehicle_graphics;`;
    let data = await client.query(query);
    // console.log(data.rows);
    const totalquestions = (data.rows.length-2)/2;
    console.log("columlenght", totalquestions);
    let option = [];
    data.rows.forEach((e) => {
      return option.push({
        questionone: {
          options: {
            price: e.side_layout_price,
            image: e.question_1_attachments[0],
          },
        },
        questiontwo: {
          options: {
            price: e.back_layout_price,
            image: e.question_2_attachments[0],
          },
        },
      });
    });
    console.log("options", option);
    res.json({ totalquestions, option });
  } catch (error) {
    console.log(error.message);
    res.json({ error: "Unable to fetch data" });
  }
};
