module.exports.getContent = async (username, type) => {
  var qry = {
    type: type,
    username: username,
  };

  var options = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(qry), // body data type must match "Content-Type" header
  };
  var response = await fetch("http://localhost:3333/api", options);
  var res = await response.json();
  console.log("content: ", res.content);
  return res.content;
};
