const Express = require("express");
const jwt = require("jsonwebtoken");

const app = Express();

app.get("/api", (req, res) => {
  res.json({
    message: "welcome to api route",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secret", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "post cvreated",
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  //user
  const user = {
    id: 1,
    username: "dave",
    email: "dave@gmail.com",
  };

  jwt.sign({ user: user }, "secret", (err, token) => {
    res.json({
      token,
    });
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");

    const bearerToken = bearer[1];

    req.token = bearerToken;

    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(3000, () => {
  console.log("app running on port 3000");
});
