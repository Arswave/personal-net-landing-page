import React from "react";
import Article from "./Article/Article";

const SectionThree = () => {
  return (
    <div style={{ margin: "5rem 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "1rem",
        }}
      >
        <div>
          <h2>En Son Yayınlanan İş İlanları</h2>
          <div>2023 iş ilanları - 293 bugün eklendi.</div>
        </div>
        <div>
          <a href="/" style={{ color: "green", fontSize: "1rem" }}>
            Tüm İş ilanlarını İncele
          </a>
        </div>
      </div>
      <div >
        <Article/>
      </div>
    </div>
  );
};

export default SectionThree;
