import React from "react";
import Article from "./Article/Article";
import PopulerIsSektorleri from "./Article/PopulerIsSektorleri";
import { Col, Row } from "react-bootstrap";

const SectionTwo = () => {
  return (
    <div>
      <Article />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "1rem",
        }}
      >
        <div>
          <h2>Populer İş Sektörleri</h2>
          <div>2023 iş ilanları - 293 bugün eklendi.</div>
        </div>
        <div>
          <a href="/" style={{ color: "green", fontSize: "1rem" }}>
            Tüm Popüler İş Sektörlerini İncele
          </a>
        </div>
      </div>
      <Row>
        <Col
          md="12"
          style={{
            display: "flex",
            scrollBehavior: "smooth",
            overflowX: "auto",
            overflow: "auto",
          }}
        >
          {Array.from({ length: 8 }).map((_,idx) => (
            <PopulerIsSektorleri key={idx} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default SectionTwo;
