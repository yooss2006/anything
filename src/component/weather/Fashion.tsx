import React from "react";

type Temperature = {
  temperature: string;
};

const Fashion = ({ temperature }: Temperature) => {
  return (
    <article className="weatherCommon fashion">
      <h3>fashion</h3>
    </article>
  );
};

export default Fashion;
