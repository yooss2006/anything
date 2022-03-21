import { useEffect, useState } from "react";
import axios from "axios";

import Dust from "./Dust";
import TemperatureAndWeather from "./TemperatureAndWeather";
import Fashion from "./Fashion";

const Weather = () => {
  const [isLoding, setIsLoding] = useState(false);
  const [temperature, setTemperature] = useState("");
  const [weatherInformation, setWeatherInformation] = useState({
    하늘상태: "",
    강수형태: "",
  });

  useEffect(() => {
    위도경도전송();
  }, []);

  async function 위도경도전송() {
    try {
      navigator.geolocation.getCurrentPosition((pos) => {
        const 위도 = pos.coords.latitude;
        const 경도 = pos.coords.longitude;
        날씨불러오기(위도, 경도);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function 날씨불러오기(위도: number, 경도: number) {
    try {
      const response = await axios.get("http://localhost:8000", {
        params: { 위도, 경도 },
      });
      const 날씨정보 = response.data.weather.data;
      let 하늘상태, 강수형태;
      for (const data of 날씨정보) {
        switch (data.category) {
          case "TMP":
            setTemperature(data.fcstValue);
            break;

          case "SKY":
            하늘상태 = data.fcstValue;
            break;

          case "PTY":
            강수형태 = data.fcstValue;
            break;

          default:
            console.log("에러");
            break;
        }
      }
      setWeatherInformation({ 하늘상태, 강수형태 });
      setIsLoding(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="weather">
      <h2>today's weather</h2>
      {isLoding ? (
        <div className="weatherContent">
          <Fashion temperature={temperature} />
          <TemperatureAndWeather weatherInformation={weatherInformation} />
          <Dust />
        </div>
      ) : (
        <p>로딩중입니다...</p>
      )}
    </section>
  );
};

export default Weather;
