require("dotenv").config();
const express = require("express");
const databaseConnection = require("./database/db.js");
const app = express();
const PORT = process.env.PORT;

//database connection
databaseConnection();

//Middleware
app.use(express.json());

//Root Endpoint
app.get("/", (req, res) => {
  res.json({
    name: "MERN api",
    version: "v1",
    status: "Active",
  });
});

app.listen(PORT, () => {
  console.log("Server is running in port:", PORT);
});
