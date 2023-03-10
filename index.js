const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("app is listening on " + PORT);
});
