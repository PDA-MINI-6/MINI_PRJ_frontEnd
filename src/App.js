import React, { useState } from "react";
import PopupSearch from "./component/PopupSearch";
import PopupMap from "./component/PopupMap";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./component/PopupDetail/Root";

function App() {
  // const {pageId}
  // const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} sm={6}>
            <Root></Root>
            {/* <h1>main</h1> */}
            {/* {isClicked ? (
              
              <PopupDetail isClicked={isClicked} />
            ) : (
              <PopupSearch isClicked={isClicked} />
            )} */}
          </Col>
          <Col xs={12} sm={6}>
            {/* <h1>map</h1> */}
            <PopupMap />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
