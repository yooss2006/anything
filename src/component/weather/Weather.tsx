import React, { useEffect } from "react";
import axios from "axios";
const Weather = () => {
  useEffect(() => {
    날씨불러오기();
  }, []);

  const 현재위치 = navigator.geolocation.getCurrentPosition(function (
    pos
  ): number[] {
    const 위도 = pos.coords.latitude;
    const 경도 = pos.coords.longitude;
    return [위도, 경도];
  });

  async function 날씨불러오기() {
    const response = await axios.get("http://localhost:8000");
    console.log(response);
    // axios
    //   .get(
    //     `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey${process.env.REACT_APP_WEATHER_API}&pageNo=1&numOfRows=10&dataType=JSON&base_date=${date}&base_time=${time}&nx=55&ny=127`
    //   )
  }

  return (
    <div>
      <h2></h2>
    </div>
  );
};

export default Weather;
