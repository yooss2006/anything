const express = require("express");
const cors = require("cors");
const axdata = require("./axdata.js");
const app = express();

app.use(cors());
app.get("/", async (req, res) => {
  await axdata((error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

app.listen(8000, () => {
  console.log("the server is running at the port 8000");
});
