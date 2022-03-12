const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000


app.use(cors());
app.use(bodyParser.json());

const mockUserData = [{ name: "essa" }, { name: "fadi" }];

// executed every time the app receives a request.
app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

app.get("/users", auth, (req, res) => {
  res.json({
    success: true,
    message: "Sucsessfuly got user, Nice!",
    users: mockUserData,
  });
  //   console.log(req.originalUrl);
  //   console.log(req.url);
  //   console.log(req.baseUrl);
});

app.get("/users/:id", (req, res) => {
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});

function auth(req, res, next) {
  if (req.query.admin === "essa") {
    console.log("auth", req.originalUrl);
    next();
  } else {
    console.log("nooooo");
  }
}
app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "bellyKid";
  const mockPassword = "topsecret";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: "username and password match",
      token: "encrypted token goes here",
    });
  } else {
    res.json({
      success: false,
      message: "username and password not match",
    });
  }
});

app.listen(PORT, function () {
  console.log("Server is running");
});
