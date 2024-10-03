const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});
