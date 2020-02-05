const express = require("express");
const { successCtrl, failCtrl, userCtrl } = require("./controllers");
const app = express();

app.get("/one", (req, res) => {
  const data = successCtrl();
  res.json({ message: data.name });
});

app.get("/two", (req, res) => {
  const data = failCtrl();
  res.json({ message: data.name });
});

app.get("/:id", (req, res) => {
  const data = userCtrl(req.params.id);
  res.json({ message: data.name });
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  res.status(statusCode).json({ message: err.message });
});

app.listen(3000, err => {
  if (err) {
    console.error("Server is going down", err.message);
    return;
  }
  console.log("Server is running on", 3000);
});
