const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const { createPool } = require("mysql2/promise");
config();

const app = express();

const pool = createPool({
  host: "localhost", // process.env.MYSQLDB_HOST,
  user: "api", // process.env.MYSQLDB_USER,
  password: "H4ch1r0Ok4", // process.env.MYSQLDB_PASSWORD,
  database: "origin_db", // process.env.MYSQLDB_DATABASE,
  port: "3307", // process.env.MYSQLDB_LOCAL_PORT,
});

app.use(cors());

pool.on("connection", () => console.log("DB connected!"));

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      title: "The name of the wind",
    },
    {
      id: 2,
      title: "El temor de un hombre sabio",
    },
  ]);
});

app.get("/dbping", async (req, res) => {
  const resultPing = await pool.query("SELECT NOW()");
  res.json(resultPing[0]);
});

app.get("/cats", async (req, res) => {
  const cats = await pool.query("SELECT * FROM cats");
  res.json(cats[0]);
});

app.listen(process.env.NODE_LOCAL_PORT, () => {
  console.log(`Server is listening at the port ${process.env.NODE_LOCAL_PORT}`);
});
