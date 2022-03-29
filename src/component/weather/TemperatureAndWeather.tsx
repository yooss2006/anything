import { whatWeatherImg, whatWeather } from "./weatherFunc.js";
import weatherStore from "../../store.js";
import { useEffect } from "react";

type TWHprops = {
  weatherInformation: {
    temperature: number;
    weatherCode: number;
    humidity: number;
  };
  isSmallMode: boolean;
};

const TemperatureAndWeather = ({
  weatherInformation,
  isSmallMode,
}: TWHprops) => {
  const weatherCode = weatherInformation.weatherCode;

  //zustand 상태관리
  const { weatherChange } = weatherStore();
  useEffect(() => {
    weatherChange(whatWeather(weatherCode));
  }, []);

  return (
    <article className="weatherCommon temperatureAndWeather">
      {isSmallMode ? null : <h3>오늘의 날씨</h3>}
      {whatWeatherImg(weatherCode)}
    </article>
  );
};

export default TemperatureAndWeather;
