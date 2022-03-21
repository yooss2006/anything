import {
  BsFillCloudFill,
  BsFillCloudSnowFill,
  BsFillCloudRainHeavyFill,
} from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

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
