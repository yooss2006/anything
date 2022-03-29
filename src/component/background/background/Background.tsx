import styled from "styled-components";
import weatherStore from "../../../store";

import BGSNOW from "../../../assets/bgSnow.jpg";
import BGSNOW2 from "../../../assets/bgSnow2.jpg";
import BGRAIN from "../../../assets/bgRain.jpg";
import BGRAIN2 from "../../../assets/bgRain2.jpg";
import BGSUNNY from "../../../assets/bgSunny.jpg";
import BGSUNNY2 from "../../../assets/bgSunny2.jpg";
import BGCLOUD from "../../../assets/bgCloud.jpg";
import BGCLOUD2 from "../../../assets/bgCloud2.jpg";
import BGLITENING from "../../../assets/bgLitening.jpg";
import BGLITENING2 from "../../../assets/bgLitening2.jpg";

interface BackgroundList {
  [key: string]: File[];
}

interface BackgroundImg {
  background: File;
}

const BackgroundSection = styled.section`
  background: url(${(props: BackgroundImg) => props.background}) no-repeat
    no-repeat center center/cover;
`;

const Background = (): JSX.Element => {
  const backgroundList: BackgroundList = {
    snow: [BGSNOW, BGSNOW2],
    rain: [BGRAIN, BGRAIN2],
    sunny: [BGSUNNY, BGSUNNY2],
    cloud: [BGCLOUD, BGCLOUD2],
    Litening: [BGLITENING, BGLITENING2],
  };
  const { weather } = weatherStore();
  function backgroundChange(weatherName: string) {
    const randomNumber = Math.floor(Math.random() * 2);
    return backgroundList[weatherName][randomNumber];
  }

  return (
    <BackgroundSection
      className="background"
      background={backgroundChange(weather)}
    ></BackgroundSection>
  );
};

export default Background;
