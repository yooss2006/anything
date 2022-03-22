import React from "react";
import { clothesSelect } from "./weatherFunc";

type Temperature = {
  temperature: string;
};

const Fashion = ({ temperature }: Temperature) => {
  return (
    <article className="weatherCommon fashion">
      <h3>fashion</h3>
      <p>
        <strong>{temperature}</strong>°C
      </p>
      <img src={clothesSelect(temperature)} className="clothesImg" />
    </article>
  );
};

export default Fashion;
