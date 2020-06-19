const timelineFiller = require("../fillers/timelineFiller");

module.exports.handle = async ({ body: { type, username } }) => {
  switch (type) {
    case "timeline":
      return await handleTimelineRequest(username);
    case "media":
      return await handleMediaRequest(username);
    default:
      throw ">> Invalid request type <<";
  }
};

async function handleTimelineRequest(username) {
  return await timelineFiller.fill(username, false);
}

async function handleMediaRequest(username) {
  return await timelineFiller.fill(username, true);
}
