module.exports.removeSpecialCharacters = (username) => {
  return Array.from(username)
    .filter((c) => c.match(/[\w]/)) // only words characters azAZ09_
    .join("");
};

// return an array of words in lowerCase without special characters
module.exports.getWords = (words) => {
  return words
    .split(" ")
    .map((word) => word.toLowerCase())
    .map((word) => {
      return Array.from(word)
        .filter((c) => c.match(/[\w\s]/))
        .join("");
    })
    .filter((word) => word !== "");
};
