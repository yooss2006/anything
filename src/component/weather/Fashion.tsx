import React from "react";
import { clothesSelect } from "./weatherFunc";

type TWHprops = {
  weatherInformation: {
    temperature: number;
    weatherCode: number;
    humidity: number;
  };
};

const Fashion = ({ weatherInformation }: TWHprops) => {
  const temperature = weatherInformation.temperature;
  return (
    <article className="weatherCommon fashion">
      <h3>fashion</h3>
      <img src={clothesSelect(temperature)} className="clothesImg" />
      <p>
        <strong>{Math.ceil(temperature)}</strong>°C
      </p>
    </article>
  );
};

export default Fashion;
