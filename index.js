const express = require("express");
const app = express();
const port = 3000;

// Importing the data from our fake database files.
const users = require("./data/users");
const posts = require("./data/posts");

app.get("/", (req, res) => {
  res.send("Work in progress!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
