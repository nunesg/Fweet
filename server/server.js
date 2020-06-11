require("dotenv").config();
const express = require("express");
const app = express();
const requestHandler = require("./src/handlers/requestHandler");

app.listen(3333, () => console.log("Listening at 3333"));
app.use(express.static("public"));
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  console.log("GET REQUEST");
});

app.post("/api", async (req, res) => {
  var timeline = await requestHandler.handle(req.body);
  //console.log("timeline = ", timeline);
  res.json({
    status: "success",
    timeline: timeline,
  });
});
