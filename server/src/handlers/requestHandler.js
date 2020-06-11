const fs = require("fs");
const timelineFiller = require("../fillers/timelineFiller");
const path = require("path");

const RESULTS_PAGE_PATH = path.join(__dirname + "/public/resultsPage.html");

module.exports.handle = async (request) => {
  switch (request.type) {
    case "TIMELINE":
      return await handleTimelineRequest(request.body);
    default:
      throw "Invalid request type";
  }
};

async function handleTimelineRequest(req) {
  return await timelineFiller.fill(req);
}
