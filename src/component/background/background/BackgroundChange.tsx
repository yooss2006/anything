import React from "react";
import BGSNOW from "../../../assets/bgSnow.jpg";
import BGSNOW2 from "../../../assets/bgSnow2.jpg";
import BGRAIN from "../../../assets/bgRain.jpg";
import BGRAIN2 from "../../../assets/bgRain2.jpg";
import BGSUNNY from "../../../assets/bgSunny.jpg";
import BGSUNNY2 from "../../../assets/bgSunny2.jpg";

type BackgroundProps = {
  backgroundNumber: number;
};

interface BackgroundList {
  snow: File[];
  rain: File[];
  sunny: File[];
}

const BackgroundChange = ({
  backgroundNumber,
}: BackgroundProps): JSX.Element => {
  let backgroundList: BackgroundList = {
    snow: [BGSNOW, BGSNOW2],
    rain: [BGRAIN, BGRAIN2],
    sunny: [BGSUNNY, BGSUNNY2],
  };

  const backgroundStype = {
    background: `url(${backgroundList.sunny[0]}) no-repeat no-repeat center center/cover`,
  };

  return <section className="background" style={backgroundStype}></section>;
};

export default BackgroundChange;
