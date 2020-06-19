require("dotenv").config();
const express = require("express");
const app = express();
const requestHandler = require("./src/handlers/requestHandler");
const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.listen(3333, () => console.log("Listening at 3333"));

/*
  receives a query with a body as follows:
    body: {
      (headers)
      body: {
        type: media / timeline
        username: (twitter username)
      }
    }
*/
app.post("/api", async (req, res) => {
  console.log(req);
  var timeline = await requestHandler.handle(req.body);
  res.json({
    status: "success",
    timeline: timeline,
  });
});
