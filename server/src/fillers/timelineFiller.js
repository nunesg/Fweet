const Twit = require("twit");
const config = require("../config");
const profileFiller = require("./profileFiller");
const suggestionsFiller = require("./suggestionsFiller");

module.exports.fill = async (username, media) => {
  var twit = new Twit(config);
  var endpoint = "statuses/user_timeline";

  var count = 100;
  if (media) count = 1000;
  var params = {
    screen_name: username,
    count: count,
    tweet_mode: "extended",
  };

  var response = await twit.get(endpoint, params);

  if (media) {
    return await addProfileAndSuggestions(
      filterMedia(response.data),
      twit,
      username
    );
  }
  return addProfileAndSuggestions(response.data, twit, username);
};

async function filterMedia(data) {
  return data
    .filter((entry) => {
      try {
        return entry.extended_entities.media.reduce((acc, elem) => {
          return acc || elem.type === "photo";
        }, false);
      } catch {
        return false;
      }
    })
    .filter((mediaEntry) => {
      return mediaEntry.favorite_count > 5;
    });
}

async function addProfileAndSuggestions(data, twit, username) {
  data.user = await getProfile(twit);
  data.suggestions = await getSuggestions(twit, username);
  return data;
}

async function getProfile(twit) {
  return await profileFiller.fill(twit);
}

async function getSuggestions(twit, username) {
  return await suggestionsFiller.fill(twit, username);
}
