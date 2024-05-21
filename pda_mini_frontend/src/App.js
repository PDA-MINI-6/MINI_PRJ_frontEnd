import React, { useState } from "react";
import PopupSearch from "./component/PopupSearch";
import PopupMap from "./component/PopupMap";
import PopupDetail from "./component/PopupDetail";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Container>
        <Row>
          <Col xs={6} sm={6}>
            {isClicked ? (
              <PopupDetail isClicked={isClicked} />
            ) : (
              <PopupSearch isClicked={isClicked} />
            )}
          </Col>
          <Col xs={6} sm={6}>
            <PopupMap />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
