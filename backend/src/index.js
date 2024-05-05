const express = require("express");
const cors = require("cors");
const { createPool } = require("mysql2/promise");

const app = express();

const pool = createPool({
  host: "mysqldb",
  user: "root",
  password: "",
  port: 3306,
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

app.listen(4000, () => {
  console.log("Server is listening at the port 4000");
});
