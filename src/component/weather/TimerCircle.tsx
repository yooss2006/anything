import React from "react";
import styled from "styled-components";

type TotalProps = {
  totalSec: number;
};
interface TranslateX {
  translateX: string;
}
const Box = styled.div`
  transform: translateX(${(props: TranslateX) => props.translateX});
`;

const TimerCircle = ({ totalSec }: TotalProps) => {
  const timePercent = Math.floor((totalSec / 1500) * 100);
  return <Box translateX={timePercent + "%"} className="gauge" />;
};

export default React.memo(TimerCircle);
