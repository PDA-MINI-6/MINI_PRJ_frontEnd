import React, { useEffect, useState, useRef, useContext } from "react";
import { naverMapContext } from "./NaverMapProvider";

export default function PopupMap() {
  // const { initMap } = useContext(naverMapContext);
  // const ref = useRef();
  // useEffect(() => {
  //   initMap(ref.current);
  // }, []);
  return (
    <>
      <div id="popUpMap" style={{ height: "100%" }}></div>
    </>
  );
}
