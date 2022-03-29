import {
  BsFillCloudFill,
  BsFillCloudSnowFill,
  BsFillCloudRainHeavyFill,
  BsFillCloudLightningRainFill,
} from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { RiMistFill } from "react-icons/ri";

import clothes1 from "../../assets/clothes1.png";
import clothes2 from "../../assets/clothes2.png";
import clothes3 from "../../assets/clothes3.png";
import clothes4 from "../../assets/clothes4.png";
import clothes5 from "../../assets/clothes5.png";
import clothes6 from "../../assets/clothes6.png";
import clothes7 from "../../assets/clothes7.png";

export function whatWeatherImg(weatherCode) {
  if (weatherCode >= 200 && weatherCode <= 232) {
    return <BsFillCloudLightningRainFill className="icon" />;
  } else if (weatherCode >= 300 && weatherCode <= 531) {
    return <BsFillCloudRainHeavyFill className="icon" />;
  } else if (weatherCode >= 600 && weatherCode <= 622) {
    return <BsFillCloudSnowFill className="icon" />;
  } else if (weatherCode >= 801 && weatherCode <= 804) {
    return <BsFillCloudFill className="icon" />;
  } else if (weatherCode == 800) {
    return <IoMdSunny className="icon" />;
  } else {
    return <RiMistFill className="icon" />;
  }
}

export function whatWeather(weatherCode) {
  if (weatherCode >= 200 && weatherCode <= 232) {
    return "Litening";
  } else if (weatherCode >= 300 && weatherCode <= 531) {
    return "rain";
  } else if (weatherCode >= 600 && weatherCode <= 622) {
    return "snow";
  } else if (weatherCode >= 801 && weatherCode <= 804) {
    return "cloud";
  } else if (weatherCode == 800) {
    return "sunny";
  } else {
    return "cloud";
  }
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
