import React from "react";

const Dust = () => {
  let fineDust: string, ultraFineDust: string;
  fineDust = "blue";
  return (
    <article className="weatherCommon dust">
      <h3>dust</h3>
      <div className="dustContent firstContent">
        <p>미세먼지</p>
        <span className="circle" style={{ backgroundColor: fineDust }}></span>
      </div>
      <div className="dustContent">
        <p>초미세먼지</p>
        <span className="circle"></span>
      </div>
    </article>
  );
};

export default Dust;
