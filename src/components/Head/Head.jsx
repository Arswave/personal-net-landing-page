import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import zil from "../../images/zil.svg";

const Head = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "5px 0",
      }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ fontSize: ".8rem", display: "flex", alignItems: "center" }}
        >
          <img
            src={zil}
            alt="zil"
            style={{
              width: "1.1rem",
              marginRight: "5px",
            }}
          />
          <span>E-posta ile iş uyarıları için abane olun!</span>
        </div>
        <div style={{ display: "flex" }}>
          <AiOutlineMail />
          <div style={{ margin: "0 0 0 8px", fontSize: ".8rem" }}>
            info@personel.net
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Head;
