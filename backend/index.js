const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

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

app.listen(4000, () => {
  console.log("Server is listening at the port 4000");
});
