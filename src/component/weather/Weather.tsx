import { useEffect, useState } from "react";
import axios from "axios";

import TemperatureAndWeather from "./TemperatureAndWeather";
import Fashion from "./Fashion";
import Humidity from "./Humidity";

import { weatherAPIKEY } from "../../config.js";

const Weather = () => {
  const [isLoding, setIsLoding] = useState(false);
  const [map, setMap] = useState([37.301368, 127.9234433]);
  const [weatherInformation, setWeatherInformation] = useState({
    temperature: 0,
    weatherCode: 0,
    humidity: 0,
  });
  const [isSmallMode, setIsSmallMode] = useState(false);

  useEffect(() => {
    letLng();
    weatherInformationLoding();
    타이머();
  }, []);

  function letLng() {
    try {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setMap([lat, lng]);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function weatherInformationLoding() {
    try {
      console.log("로딩");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${map[0]}&lon=${map[1]}&appid=${weatherAPIKEY}`
      );
      const weatherObject = {
        temperature: response.data.main.temp - 273.15,
        weatherCode: response.data.weather[0].id,
        humidity: response.data.main.humidity,
      };
      setWeatherInformation(weatherObject);
      setIsLoding(true);
    } catch (error) {
      console.log(error);
    }
  }

  function 타이머() {
    setInterval(weatherInformationLoding, 3600000);
  }

  return (
    <section
      className={isSmallMode ? "weather small" : "weather"}
      onClick={() => {
        setIsSmallMode(!isSmallMode);
      }}
    >
      {isSmallMode ? null : <h2>today's weather</h2>}
      {isLoding ? (
        <div className="weatherContent">
          <Fashion
            weatherInformation={weatherInformation}
            isSmallMode={isSmallMode}
          />
          <TemperatureAndWeather
            weatherInformation={weatherInformation}
            isSmallMode={isSmallMode}
          />
          <Humidity
            weatherInformation={weatherInformation}
            isSmallMode={isSmallMode}
          />
        </div>
      ) : (
        <p>로딩중입니다...</p>
      )}
    </section>
  );
};

export default Weather;
