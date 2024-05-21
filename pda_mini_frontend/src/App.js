import React, { useState } from "react";
import PopupSearch from "./component/PopupSearch";
import PopupMap from "./component/PopupMap";
import PopupDetail from "./component/PopupDetail";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {isClicked ? (
        <PopupDetail isClicked={isClicked} />
      ) : (
        <PopupSearch isClicked={isClicked} />
      )}
      <PopupMap />
    </>
  );
}

export default App;
