import React from "react";
import PopupSlide from "./PopupSlide";
import PopupLikecnt from "./PopupLikecnt";
import PopupList from "./PopupList";
import PopupTag from "./PopupTag";
import "./Root.css";
export default function Root({ popupData }) {
  console.log(popupData);
  return (
    <>
      <div className="root">
        <PopupSlide images={popupData.images} />
        <PopupLikecnt like={popupData.liked} />
        <PopupList
          title={popupData.title}
          subtitle={popupData.subtitle}
          startDate={popupData.startDate}
          endDate={popupData.endDate}
          content={popupData.content}
        />
        <PopupTag tags={popupData.tags} />
      </div>
    </>
  );
}
