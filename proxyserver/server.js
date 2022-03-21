const express = require("express");
const cors = require("cors");
const weatherResponse = require("./apiResponse/weatherResponse.js");
const dustResponse = require("./apiResponse/dustResponse.js");
const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const 위경도 = req.query;
  const weatherAndDustData = {};
  await weatherResponse(위경도, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      weatherAndDustData.weather = data;
    }
  });
  await dustResponse((error, data) => {
    if (error) {
      res.send(error);
    } else {
      weatherAndDustData.dust = data;
    }
  });

  res.send(weatherAndDustData);
});

app.listen(8000, () => {
  console.log("the server is running at the port 8000");
});
