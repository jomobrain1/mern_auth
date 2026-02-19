require("dotenv").config();
const express = require("express");
const databaseConnection = require("./database/db.js");
const app = express();
const PORT = process.env.PORT;

//database connection
databaseConnection();

//Middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running in port:", PORT);
});
