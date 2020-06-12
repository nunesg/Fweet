export default async function getTimeline(username) {
  var qry = {
    type: "TIMELINE",
    body: username,
  };

  var options = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(qry), // body data type must match "Content-Type" header
  };
  var response = await fetch("http://192.168.100.8:3333/api", options);
  var res = await response.json();
  return res.timeline;
}
