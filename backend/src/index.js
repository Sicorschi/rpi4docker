const express = require("express");
const cors = require("cors");
const { createPool } = require("mysql2/promise");

const app = express();

const pool = createPool({
  host: "localhost",
  user: "api",
  password: "H4ch1r0Ok4",
  database: "origin_db",
  port: 3307,
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

app.listen(4000, () => {
  console.log("Server is listening at the port 4000");
});
