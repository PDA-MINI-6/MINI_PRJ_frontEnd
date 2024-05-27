import React from "react";
import PopupSearch from "./component/PopupSearch";
import PopupMap from "./component/PopupMap";
import PopupDetail from "./component/PopupDetail";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={6} sm={6}>
            <Routes>
              <Route path="/" element={<PopupSearch />} />
              <Route path="/:id" element={<PopupDetail />} />
            </Routes>
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
