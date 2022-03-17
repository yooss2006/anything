import React, { ReactElement, useState } from "react";
import BackgroundChange from "./BackgroundChange";

const Background = () => {
  const [backgroundNumber, setBackgroundNumber] = useState(1);
  return (
    <>
      <BackgroundChange backgroundNumber={backgroundNumber} />
    </>
  );
};

export default Background;
