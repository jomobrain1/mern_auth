require("dotenv").config();
const express = require("express");
const databaseConnection = require("./database/db.js");
const app = express();
const PORT = process.env.PORT;
const userRoutes = require("./routes/users.route.js");
//database connection
databaseConnection();

//Middleware
app.use(express.json());
app.use("/api/v1", userRoutes);

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
