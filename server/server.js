const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 4000;
const build_path = "frontend/build";

const app = express();
app.use(favicon(__dirname + `${build_path}/favicon.ico`));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, build_path)));

app.get("/ping", function(req, res) {
  return res.send("pong");
});
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, build_path, "index.html"));
});

app.get("/main", (req, res) => {
  return res.send("hello");
});

app.listen(port, () => console.log("server is running"));
