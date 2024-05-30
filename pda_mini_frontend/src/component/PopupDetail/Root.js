import React from "react";
import PopupSlide from "./PopupSlide";
import PopupLikecnt from "./PopupLikecnt";
import PopupList from "./PopupList";
import PopupTag from "./PopupTag";
import "./Root.css";
import PopupList2 from "./PopupList2";
export default function Root({ popupData }) {
  console.log(popupData);

  const { id, title, address, images, liked, tags, content } = popupData;
  const start = popupData.startDate || popupData.open;
  const end = popupData.endDate || popupData.close;
  const conti = popupData.price || popupData.content;

  return (
    <>
      <div className="root">
        <PopupSlide images={popupData.images} />
        <PopupLikecnt liked={popupData.liked} id={popupData.id} />
        {popupData.category === "popup" ? (
          <PopupList
            title={popupData.title}
            address={popupData.address}
            start={popupData.startDate}
            end={popupData.endDate}
            conti={popupData.content}
          />
        ) : popupData.category === "cafe" ? (
          // 카페 카테고리일 경우
          <PopupList2
            title={popupData.title}
            address={popupData.address}
            start={popupData.startDate}
            end={popupData.endDate}
            conti={popupData.content}
          />
        ) : (
          // 레스토랑 카테고리일 경우
          <PopupList2
            title={popupData.title}
            address={popupData.address}
            start={popupData.startDate}
            end={popupData.endDate}
            conti={popupData.content}
          />
        )}
      </div>

      {/* <div className="root">
      <PopupSlide images={images} />
      <PopupLikecnt like={liked} />
      <PopupList
        title={title}
        address={address}
        start={start}
        end={end}
        content={conti}
         
      />
      <PopupTag tags={tags} />
    </div> */}
    </>
  );
}
