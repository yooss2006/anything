import {
  BsFillCloudFill,
  BsFillCloudSnowFill,
  BsFillCloudRainHeavyFill,
} from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

import clothes1 from "../../assets/clothes1.png";
import clothes2 from "../../assets/clothes2.png";
import clothes3 from "../../assets/clothes3.png";
import clothes4 from "../../assets/clothes4.png";
import clothes5 from "../../assets/clothes5.png";
import clothes6 from "../../assets/clothes6.png";
import clothes7 from "../../assets/clothes7.png";

export function whatWeather(하늘상태, 강수형태) {
  let weatherIcon;
  switch (강수형태) {
    case "0":
      weatherIcon =
        하늘상태 === "1" ? (
          <IoMdSunny className="icon" />
        ) : (
          <BsFillCloudFill className="icon" />
        );
      break;
    case "3":
      weatherIcon = <BsFillCloudSnowFill className="icon" />;
      break;
    default:
      weatherIcon = <BsFillCloudRainHeavyFill className="icon" />;
      break;
  }
  return weatherIcon;
}

export function clothesSelect(temperature) {
  let 온도 = Number(temperature);
  if (온도 > 28) {
    return clothes1;
  } else if (온도 >= 23 && 온도 <= 27) {
    return clothes2;
  } else if (온도 >= 20 && 온도 <= 22) {
    return clothes3;
  } else if (온도 >= 17 && 온도 <= 19) {
    return clothes4;
  } else if (온도 >= 12 && 온도 <= 16) {
    return clothes5;
  } else if (온도 >= 5 && 온도 <= 11) {
    return clothes6;
  } else {
    return clothes7;
  }
}
