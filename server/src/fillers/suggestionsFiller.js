//only works with OAuth
module.exports.fill = async (twit, username) => {
  const endpoint = `https://api.twitter.com/1.1/friendships/lookup?screen_name=${username}`;
  var response = await twit.get(endpoint);
  return response.data;
};
