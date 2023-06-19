import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import durbunluKadin from "../../images/durbnluKadın.png";
import Article from "./Article/Article";

const SectionOne = () => {
  return (
    <Row
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Col lg={6}>
        <Article />
      </Col>
      <Col lg={6}>
        <Image src={durbunluKadin} alt="durbunluKadin"
        style={{width:"100%",padding:"1rem"}}
        />
      </Col>
    </Row>
  );
};

export default SectionOne;
