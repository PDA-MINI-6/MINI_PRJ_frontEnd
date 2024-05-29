import React, { useState } from "react";
import PopupSearch from "./component/PopupSearch";
import PopupMap from "./component/PopupMap";
import PopupDetail from "./component/PopupDetail";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NaverMapProvider from "./component/NaverMapProvider";
import Navigation from "./component/Navigation";

function App() {
  const [category, setCategory] = useState("0");

  return (
    <>
      <Navigation setCategory={setCategory} />
      <NaverMapProvider>
        <Container fluid>
          <Row>
            <Col xs={6} sm={6}>
              <Routes>
                <Route path="/" element={<PopupSearch category={category} />} />
                <Route path="/:id" element={<PopupDetail />} />
              </Routes>
            </Col>
            <Col xs={6} sm={6} style={{ height: "92vh" }}>
              <PopupMap />
            </Col>
          </Row>
        </Container>
      </NaverMapProvider>
    </>
  );
}

export default App;
