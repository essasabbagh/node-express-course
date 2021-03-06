const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const mockUserData = [{ name: "essa" }, { name: "fadi" }];

// executed every time the app receives a request.
app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "Sucsessfuly got user, Nice!",
    users: mockUserData,
  });
});

app.get("/users/:id", function (req, res) {
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});

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
app.listen(8000, function () {
  console.log("Server is running on port: 8000");
});
