//only works with OAuth
module.exports.fill = async (twit) => {
  var response = await twit.get("https://api.twitter.com/1.1/users/show");
  return response.data;
};
