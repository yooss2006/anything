import React, { useState, useEffect, useRef } from "react";
import { BsFillPlayFill, BsStopFill } from "react-icons/bs";
import Timer from "./Timer";
const Pomodoro = () => {
  const [studyMin, setStudyMin] = useState(25);
  const [studySec, setStudySec] = useState(0);
  const [restMin, setRestMin] = useState(5);
  const [restSec, setRestSec] = useState(0);
  const [isStudy, setIsStudy] = useState(false);
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    if (isStudy) {
      let timer = setInterval(() => {
        if (studySec > 0) {
          setStudySec((studySec) => studySec - 1);
        }
        if (studySec === 0) {
          if (studyMin === 0) {
            clearInterval(timer);
          } else {
            setStudyMin((studyMin) => studyMin - 1);
            setStudySec((studySec) => 59);
          }
        }
        setTime(timeFormatchange(studyMin, studySec));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [studyMin, studySec, time, isStudy]);

  function timeFormatchange(
    studyMin: number | string,
    studySec: number | string
  ): string {
    studyMin = studyMin < 10 ? "0" + String(studyMin) : String(studyMin);
    studySec = studySec < 10 ? "0" + String(studySec) : String(studySec);
    return studyMin + " : " + studySec;
  }

  return (
    <section className="pomodoro">
      <h2>Pomodoro Timer</h2>
      <Timer time={time} />
      <button className="playBtn" onClick={() => setIsStudy(!isStudy)}>
        {isStudy ? <BsStopFill /> : <BsFillPlayFill />}
      </button>
    </section>
  );
};

export default Pomodoro;
