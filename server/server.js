const express = require("express");
const app = express();

app.listen(3333, () => console.log("Listening at 3333"));
app.use(express.static("public"));
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  console.log("GET REQUEST");
  res.json({
    status: "success",
  });
});

app.post("/api", (req, res) => {
  const data = req.body;
  res.json({
    status: "success",
    received: data,
  });
});
