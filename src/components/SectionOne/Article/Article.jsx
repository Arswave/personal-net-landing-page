import React from "react";
import Search from "./Search";
import Square from "../../../images/Square.svg";
import Notion from "../../../images/Notion.svg";
import Github from "../../../images/Github.svg";

const Article = () => {
  return (
    <>
      <div style={{ margin: "4rem auto" }}>
        <div style={{padding:"0 3rem"}}>

          <h2 style={{ color: "#00cf9a" }}>
            Kariyer yolculuğunuzu <div>bizimle başlatın</div>
          </h2>
          <h6 style={{ fontSize: ".8rem", paddingBottom: "2rem" }}>
            Sizi geleceğe Taşıyacak iş fırsatları burada
          </h6>

        </div>
        <Search />

        <div style={{ color: "#555555", marginTop: "2rem" }}>
          Popüler Aramalar :{" "}
          <span style={{ color: "#111111" }}>
            İmalat Mühendisi, Beyin Cerrahı
          </span>
        </div>
      </div>

      <div>
        <div
          style={{
            fontSize: "1rem",
            color: "#111111",
            padding: "3rem 0 0 0",
          }}
        >
          Önde gelen markalar ve girişimler tarafından güvenilmektedir
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // marginRight: "40%",
          }}
        >
          <img
            src={Square}
            alt="Square"
            style={{
              margin: "1rem 1rem 1rem 0",
              width: "4.5rem",
            }}
          />
          <img
            src={Notion}
            alt="Notion"
            style={{
              margin: "1rem",
              width: "4.5rem",
            }}
          />
          <img
            src={Github}
            alt="Github"
            style={{
              margin: "1rem",
              width: "4.5rem",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Article;
