const Express = require("express");

const app = Express();

let users = {
  1: {
    id: "1",
    name: "john doe",
  },
  2: {
    id: "2",
    name: "dave smith",
  },
};

let messages = {
  1: {
    id: "1",
    text: "hello world",
    userid: "1",
  },
  2: {
    id: "2",
    text: "by world",
    userid: "2",
  },
};

app.get("/users", (req, res) => {
  return res.send(Object.values(users));
});

app.get("/users/:userId", (req, res) => {
  return res.send(Object.values(users[req.params.userId]));
});

app.get("/messages", (req, res) => {
  return res.send(Object.values(messages));
});

app.get("/messages/:messageId", (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.post("/", (req, res) => {
  return res.send("recieved a POST http request \n");
});

app.put("/user/:userid", (req, res) => {
  return res.send(`Received a PUT HTTP method on ${req.params.userid} \n`);
});

app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method \n");
});

app.listen(3000, () => {
  console.log("app running on port 3000");
});
