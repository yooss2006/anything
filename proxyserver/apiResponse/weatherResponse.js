const axios = require("axios");
const { WetherKey } = require("../config/serviceKey.js");
const { weatherUrl } = require("../config/url.js");
const { year, month, day, hour, minutes } = require("../func/date.js");
const weatherBaseTime = require("../func/weatherBaseTime.js");
const dfs_xy_conv = require("../func/coordinateChange.js");

const weatherResponse = async (위경도, callback) => {
  const url = weatherUrl;
  //decodeURIComponent 디코드 해야지만 돌아간다.
  const serviceKey = decodeURIComponent(WetherKey);

  const 위도 = 위경도.위도 * 1;
  const 경도 = 위경도.경도 * 1;
  const { x, y } = dfs_xy_conv("toXY", 위도, 경도);
  const baseTime = weatherBaseTime(hour, minutes);

  try {
    const response = await axios.get(url, {
      params: {
        pageNo: "1",
        numOfRows: "10",
        dataType: "JSON",
        base_date: `${year + month + day}`,
        base_time: baseTime,
        nx: x + "",
        ny: y + "",
        serviceKey: serviceKey,
      },
    });

    let data = response.data.response.body.items.item;
    data = data.filter((item) => {
      if (
        item.category === "SKY" ||
        item.category === "TMP" ||
        item.category === "PTY"
      ) {
        return item;
      }
    });
    callback(undefined, { data: data });
  } catch (error) {
    console.log("error broke ou: ", error);
  }
};

module.exports = weatherResponse;
