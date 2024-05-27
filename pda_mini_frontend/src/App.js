import React, { useState } from "react";
import PopupSearch from "./component/PopupSearch";
import PopupMap from "./component/PopupMap";
import PopupDetail from "./component/PopupDetail";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={6} sm={6} xl={6}>
            {isClicked ? (
              <PopupDetail isClicked={isClicked} />
            ) : (
              <PopupSearch isClicked={isClicked} />
            )}
          </Col>
          <Col xs={6} sm={6} xl={6}>
            <PopupMap />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
