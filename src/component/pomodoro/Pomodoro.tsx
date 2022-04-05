import React, { useState, useEffect, useRef } from "react";
import { BsFillPlayFill, BsStopFill } from "react-icons/bs";
import Timer from "./Timer";
const Pomodoro = () => {
  const [mode, setMode] = useState("study - time");
  const [studyMin, setStudyMin] = useState(1);
  const [studySec, setStudySec] = useState(0);
  const [restMin, setRestMin] = useState(5);
  const [restSec, setRestSec] = useState(0);
  const [isStudy, setIsStudy] = useState(false);
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (isStudy) {
      if (mode === "study - time")
        timer = makeTimer(studyMin, studySec, setStudyMin, setStudySec);
      else if (mode === "rest - time")
        timer = makeTimer(restMin, restSec, setRestMin, setRestSec);
      return () => clearInterval(timer);
    } else {
      setTime(
        mode === "study - time"
          ? `${timeFormatchange(studyMin, studySec)}`
          : `${timeFormatchange(restMin, restSec)}`
      );
    }
  }, [studyMin, studySec, time, isStudy]);

  function makeTimer(
    min: number,
    sec: number,
    setMin: React.Dispatch<React.SetStateAction<number>>,
    setSec: React.Dispatch<React.SetStateAction<number>>
  ) {
    let timer = setInterval(() => {
      if (sec > 0) {
        setSec((sec) => sec - 1);
      }
      if (sec === 0) {
        if (min === 0) {
          setMode(mode === "study - time" ? "rest - time" : "study - time");
          setStudyMin(25);
          setRestMin(5);
          clearInterval(timer);
          setIsStudy(false);
        } else {
          setMin((min) => min - 1);
          setSec((sec) => 59);
        }
      }
      setTime(timeFormatchange(min, sec));
    }, 1000);
    return timer;
  }

  function timeFormatchange(
    min: number | string,
    sec: number | string
  ): string {
    min = min < 10 ? "0" + String(min) : String(min);
    sec = sec < 10 ? "0" + String(sec) : String(sec);
    return min + " : " + sec;
  }

  return (
    <section className="pomodoro">
      <h2>{mode}</h2>
      <Timer time={time} />
      <button className="playBtn" onClick={() => setIsStudy(!isStudy)}>
        {isStudy ? <BsStopFill /> : <BsFillPlayFill />}
      </button>
    </section>
  );
};

export default Pomodoro;
