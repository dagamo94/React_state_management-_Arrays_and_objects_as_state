import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const [clickCounter, setClickCounter] = useState([]);

  const handleClick = () => {
    setClickCounter([...clickCounter, Date.now()])
  };

  return (
    <div>
      <ClickTimes btnClick={handleClick}/>
      <TimestampsDisplay timestamps={clickCounter} />
    </div>
  );
}

export default App;
