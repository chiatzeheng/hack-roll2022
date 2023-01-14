const express = require("express");
const app = express();

const PORT = 8080 || process.env.PORT;

app.get("/", (req, res) => {
  console.log("elliott", req.body);
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
