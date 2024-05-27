import React, { useEffect } from "react";
import PopupSlide from "./PopupSlide";
import PopupLikecnt from "./PopupLikecnt";
import PopupList from "./PopupList";
import PopupTag from "./PopupTag";
import { useParams } from "react-router-dom";
import { getPageInfo } from "./apis/pageid";
import { useState } from "react";
import "./Root.css";

export default function Root() {
  // const { pageId } = useParams();
  // const [pageinfo, setPageInfo] = useState([]);

  // useEffect(() => {
  //   getPageInfo({ pageId }).then((data) => {
  //     console.log(data);
  //     setPageInfo(data);
  //   });
  // }, [pageId]);

  return (
    <>
      <div className="root">
        <PopupSlide />
        <PopupLikecnt />
        <PopupList />
        <PopupTag />
      </div>
    </>
  );
}
