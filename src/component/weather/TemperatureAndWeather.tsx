import { whatWeather } from "./weatherFunc.js";

type TWHprops = {
  weatherInformation: {
    temperature: number;
    weatherCode: number;
    humidity: number;
  };
};

const TemperatureAndWeather = ({ weatherInformation }: TWHprops) => {
  const weatherCode = weatherInformation.weatherCode;
  return (
    <article className="weatherCommon temperatureAndWeather">
      <h3>오늘의 날씨</h3>
      {whatWeather(weatherCode)}
    </article>
  );
};

export default TemperatureAndWeather;
