import React from "react";
import TimerCircle from "../weather/TimerCircle";

type TimeProps = {
  time: string;
};

const Timer = ({ time }: TimeProps) => {
  const timeArr = time.split(":");
  const totalSec = Number(timeArr[0]) * 60 + Number(timeArr[1]);

  return (
    <div className="contTimer">
      <div className="timer">
        <div className="gauge"></div>
        <TimerCircle totalSec={totalSec} />
        <div className="circle"></div>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default React.memo(Timer);
