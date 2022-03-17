const axios = require("axios");
const { WetherKey } = require("./config/serviceKey.js");
const { weatherUrl } = require("./config/url.js");

const axdata = async (callback) => {
  const url = weatherUrl;
  //decodeURIComponent 디코드 해야지만 돌아간다.
  const serviceKey = decodeURIComponent(WetherKey);

  try {
    const response = await axios.get(url, {
      params: {
        pageNo: "1",
        numOfRows: "10",
        dataType: "JSON",
        base_date: "20220317",
        base_time: "0500",
        nx: "55",
        ny: "127",
        serviceKey: serviceKey,
      },
    });
    const data = response.data.response.bod;
    callback(undefined, { data: data });
  } catch (error) {
    console.log("error broke ou: ", error);
  }
};

module.exports = axdata;
