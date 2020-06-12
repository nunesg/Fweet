const Twit = require("twit");
const config = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
};

module.exports.fill = async (username) => {
  var twit = new Twit(config);
  var endpoint = "statuses/user_timeline";

  console.log("config = ", config);

  var params = {
    screen_name: username,
    count: 2,
    tweet_mode: "extended",
  };

  var response = await twit
    .get(endpoint, params)
    .then((answer) => {
      return answer.data;
    })
    .catch((err) => {
      throw err;
    });
  return response;
};
