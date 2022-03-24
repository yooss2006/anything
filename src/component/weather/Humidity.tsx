import React from "react";
import styled from "styled-components";

type TWHprops = {
  weatherInformation: {
    temperature: number;
    weatherCode: number;
    humidity: number;
  };
};

interface Height {
  height: string;
}

const Box = styled.div`
  height: calc(${(props: Height) => props.height} - 1px);
`;

const Humidity = ({ weatherInformation }: TWHprops) => {
  const humidity = weatherInformation.humidity;
  return (
    <article className="weatherCommon humidity">
      <h3>습도</h3>
      <div className="hygrometer">
        <Box height={humidity + "%"} />
      </div>
      <p>
        <strong>{humidity}</strong>%
      </p>
    </article>
  );
};

export default Humidity;
