import React from "react";

import { whatWeather } from "./weatherFunc.js";

type TAWprops = {
  weatherInformation: {
    하늘상태: string;
    강수형태: string;
  };
};

const TemperatureAndWeather = ({ weatherInformation }: TAWprops) => {
  const information = weatherInformation;
  const { 하늘상태, 강수형태 } = information;

  return (
    <article className="weatherCommon temperatureAndWeather">
      <h3>오늘의 날씨</h3>
      {whatWeather(하늘상태, 강수형태)}
    </article>
  );
};

export default TemperatureAndWeather;
