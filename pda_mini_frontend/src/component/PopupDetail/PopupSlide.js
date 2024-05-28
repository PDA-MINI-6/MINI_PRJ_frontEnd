import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./PopupSlide.css"; // 커스텀 CSS 파일 임포트
export default function PopupSlide({ images }) {
  return (
    <div>
      <Carousel>
        {images &&
          images.map((image, index) => (
            <Carousel.Item key={index}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fluid
                style={{ objectFit: "cover", width: "100%", height: "450px" }}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}
