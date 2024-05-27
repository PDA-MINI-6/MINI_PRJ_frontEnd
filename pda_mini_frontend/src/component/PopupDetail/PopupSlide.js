import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import ExampleCarouselImage from "../../img/성수.jpg";
import ExampleCarouselImage2 from "../../img/성수첫.jpg";
import ExampleCarouselImage3 from "../../img/성수삼.jpg";

export default function PopupSlide() {
  const [imagedata, setImageData] = useState([]);

  //useParams id 받아와서 id에 해당되는 상세 페이지 렌더링
  //useEffect -> axios -> 백과 데이터(img) 직접 통신

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image
            src={ExampleCarouselImage}
            alt="First slide"
            fluid
            style={{ objectFit: "cover", width: "100%", height: "450px" }}
          />
          <Carousel.Caption>
            <h3>성수</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={ExampleCarouselImage2}
            alt="Second slide"
            fluid
            style={{ objectFit: "cover", width: "100%", height: "450px" }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={ExampleCarouselImage3}
            alt="Third slide"
            fluid
            style={{ objectFit: "cover", width: "100%", height: "450px" }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
