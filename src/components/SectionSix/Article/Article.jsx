import React from "react";

const Article = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding:"2rem"
      }}
    >
      <h1 style={{ margin: "1rem" }}> Bu Platform Senin İçin</h1>
      <div style={{ margin: "1rem" }}>
        Personel.net'e kayıt olarak iş bulma süreçlerini kolaylaştırabilir.
        Kariyer hedeflerine ulaşma şanslarını artırabilir ve yeni iş
        fırsatlarından haberdar olabilirler.
      </div>

      <ul style={{ listStyle: "none", margin: "3rem 0" }}>
        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            aria-hidden="true"
            className="far fa-check-circle"
            style={{ color: "blue", margin: "1rem 1rem 1rem 0" }}
          />
          <p>
            Personel.net, farklı sektörlerde ve pozisyonlarda birçok iş ilanı
            sunar. Kayıt olan adaylar, kariyer hedeflerine uygun ilanları
            kolayca bulabilir ve başvuruda bulunabilirler.
          </p>
        </li>

        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            aria-hidden="true"
            className="far fa-check-circle"
            style={{ color: "blue", margin: "1rem 1rem 1rem 0" }}
          />
          <p>
            Personel.net üzerinden kayıt olan adaylar, başvurmak istedikleri iş
            ilanlarına hızlı ve kolay bir şekilde başvurabilirler. Başvurularını
            online olarak yapabilir ve işverenlerle iletişime geçebilirler.{" "}
          </p>
        </li>

        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            aria-hidden="true"
            className="far fa-check-circle"
            style={{ color: "blue", margin: "1rem 1rem 1rem 0" }}
          />
          <p>
            Personel.net, adaylara kapsamlı bir özgeçmiş oluşturma ve düzenleme
            imkanı sunar. Bu sayede adaylar, yeteneklerini, deneyimlerini ve
            eğitim bilgilerini detaylı bir şekilde paylaşabilirler.{" "}
          </p>
        </li>

        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            aria-hidden="true"
            className="far fa-check-circle"
            style={{ color: "blue", margin: "1rem 1rem 1rem 0" }}
          />
          <p>
            Kayıtlı adaylar, ilgi duydukları pozisyonlarla ilgili olarak güncel
            iş ilanı bildirimleri alabilirler. Böylece fırsatları kaçırma
            riskini minimize ederler ve yeni iş imkanlarından haberdar olurlar.
          </p>
        </li>

        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            aria-hidden="true"
            className="far fa-check-circle"
            style={{ color: "blue", margin: "1rem 1rem 1rem 0" }}
          />
          <p>
            Personel.net, kariyer gelişimi konusunda adaylara değerli ipuçları
            ve rehberlik sunar. Kayıtlı adaylar, iş arama stratejileri, mülakat
            teknikleri ve kariyer planlaması gibi konularda destek alabilirler.{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Article;
