import React from "react";
import Background from "./component/background/background/Background";
import Weather from "./component/weather/Weather";
import Pomodoro from "./component/pomodoro/Pomodoro";

function App() {
  return (
    <div className="App">
      <Weather />
      <Background />
      <Pomodoro />
    </div>
  );
}

export default App;
