import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Article = () => {
  return (
    <Row>
      <Col
      md="4"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin:"2rem 0"
        }}
      >
        <BsSearch style={{ fontSize: "4rem" }} />
        <h2> Kolay Arama Yap</h2>

        <p style={{ textAlign: "center" }}>
          Personel.net'in arama motorunu kullanarak iş arama sürecinizi
          başlatın.
        </p>
      </Col>

      <Col
      md="4"

        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin:"2rem 0"

        }}
      >
        <FaPen style={{ fontSize: "4rem" }} />
        <h2>Hemen İlanları İnceleyin</h2>
        <p style={{ textAlign: "center" }}>
          Arama sonuçlarından size uygun olan iş ilanlarını seçin ve daha
          detaylı incelemek için üzerlerine tıklayın.
        </p>
      </Col>

      <Col
      md="4"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin:"2rem 0"

        }}
      >
        <AiOutlineCheckCircle style={{ fontSize: "5rem" }} />
        <h2>Hızlı Başvuru Yap</h2>
        <p style={{ textAlign: "center" }}>
          İş ilanını seçtikten sonra, başvurunuzu yapmak için işverenin
          belirttiği adımları takip edin. Personel.net, iş arama sürecini sizin
          için kolaylaştırır.
        </p>
      </Col>
    </Row>
  );
};

export default Article;
