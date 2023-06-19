import React from "react";
import Article from "./Article/Article";
import { Col, Row } from "react-bootstrap";

const SectionSix = () => {
  return (
    <Row>
      <Col md="6" style={{display:"flex",justifyContent:"center"}}>
        <img
          src="https://personel.net/wp-content/uploads/2023/05/Adsiz-tasarim-4.png"
          alt="bu platform senin için "
          style={{
            width:"30rem",
        objectFit:"contain"
        }}
        />
      </Col>
      <Col md="6">
        <Article />
      </Col>
    </Row>
  );
};

export default SectionSix;
