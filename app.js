const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("dotenv").config();
require("./src/config/db");
var bodyParser = require("body-parser");
const routerr = require("./src/routers/Router");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use("/", routerr);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
