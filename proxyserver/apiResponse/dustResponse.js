const axios = require("axios");
const { WetherKey } = require("../config/serviceKey.js");
const { dustUrl } = require("../config/url.js");
const { year, month, day } = require("../func/date.js");
const dustResponse = async (callback) => {
  const url = dustUrl;
  const serviceKey = decodeURIComponent(WetherKey);
  const date = new Date();
  try {
    const response = await axios.get(url, {
      params: {
        returnType: "JSON",
        searchDate: `${year}-${month}-${day}`,
        InformCode: "PM10",
        serviceKey: serviceKey,
      },
    });
    const data = response.data.response.body;
    console.dir(data);
    callback(undefined, { data: data });
  } catch (error) {
    console.log("error broke ou: ", error);
  }
};

module.exports = dustResponse;
