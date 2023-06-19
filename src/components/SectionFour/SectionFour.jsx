import React from 'react'
import Article from './Article/Article'

const SectionFour = () => {
  return (
    <div style={{ margin: "5rem 0", padding:"5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "1rem",
        }}
      >
        <div>
          <h2>Öne Çıkan Şirketler Aktif Olarak İşe Alım Yapıyor</h2>
          <div>100 milyondan fazla iş</div>
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
  )
}

export default SectionFour