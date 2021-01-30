const express = require("express");
const app = express();

const mockUserData = [{ name: "essa" }, { name: "fadi" }];

app.get("/user", function (req, res) {
  res.json({
    success: true,
    message: "Sucsessfuly got user, Nice!",
    users: mockUserData,
  });
});
app.listen(8000, function () {
  console.log("Server is running");
});
