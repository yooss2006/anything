function weatherBaseTime(hour, minutes) {
  let setBaseTime;
  const baseTimeList = [
    "2300",
    "2000",
    "1700",
    "1400",
    "1100",
    "0800",
    "0500",
    "0200",
  ];
  let pick = false;
  baseTimeList.forEach((baseTime) => {
    if (hour >= baseTime.slice(0, 2) * 1 && !pick) {
      if (baseTime.slice(0, 2) * 1 === hour && minutes < 10) {
        console.log("같다");
      } else {
        console.log(baseTime);
        setBaseTime = baseTime;
        pick = true;
      }
    }
  });
  return setBaseTime;
}
module.exports = weatherBaseTime;
