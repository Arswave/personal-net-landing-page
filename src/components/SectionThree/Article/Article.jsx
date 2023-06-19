import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { GoLocation } from "react-icons/go";
import { SlEnergy } from "react-icons/sl";
import { FcLike } from "react-icons/fc";

const Article = () => {
  return (
    <>
      <Row >
        <Col md="12" style={{display:"flex",alignItems:"center", justifyContent:"center" ,margin:"2rem 0"}}>
          <Col md="5">
            <Card style={{ width: "100%", padding:"1rem", borderRadius:"1rem"}}>
              <div style={{ display: "flex" }}>
                <Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://personel.net/wp-content/uploads/2023/05/Durbunlu-Kadin-1.png"
                />
                <div style={{ flex: "1" }}>
                  <Card.Title>E-İHRACAAT UZMANI</Card.Title>
                  <Card.Text>
                    Şirket Adı <em>Vinda Mobilya</em> Sektör
                  </Card.Text>
                </div>
                <div style={{ fontSize: "1.2rem" }}>
                  <SlEnergy style={{margin:"0 .5rem"}} />
                  <FcLike style={{margin:"0 .5rem"}}/>
                </div>
              </div>
              {/*  */}
              <div>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      backgroundColor: "#6c4cbe",
                      borderRadius: "10px",
                      marginRight: "10px",
                      marginLeft: "10px",
                      padding: "5px 10px",
                    }}
                  >
                    Tam Zamanlı{" "}
                  </p>
                  <p
                    style={{
                      backgroundColor: "#007456",
                      borderRadius: "10px",
                      padding: "5px 10px",
                    }}
                  >
                    {" "}
                    <GoLocation /> Kayseri{" "}
                  </p>
                </div>
              </div>
              <Card.Text>30 gün İçerisinde Başvurular sona erecek.</Card.Text>
            </Card>
          </Col>
        </Col>

        {/* <Col> */}
        <Col md="12" style={{display:"flex",alignItems:"center", justifyContent:"center",margin:"2rem 0"}}>
          <Col md="5">
          <Card style={{ width: "100%", padding:"1rem", borderRadius:"1rem"}}>
              <div style={{ display: "flex" }}>
                <Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://personel.net/wp-content/uploads/2023/05/Durbunlu-Kadin-1.png"
                />
                <div style={{ flex: "1" }}>
                  <Card.Title>Vasıfsız Eleman</Card.Title>
                  <Card.Text>
                    Şirket Adı <em>Egemen Danışmanlık</em> Sektör 
                    <a href="/"  style={{ textDecoration:"none",color:"green"}} >{"\t"}-Diğer</a>
                  </Card.Text>
                </div>
                <div style={{ fontSize: "1.2rem" }}>
                  <SlEnergy style={{margin:"0 .5rem"}} />
                  <FcLike style={{margin:"0 .5rem"}}/>
                </div>
              </div>
              {/*  */}
              <div>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      backgroundColor: "#6c4cbe",
                      borderRadius: "10px",
                      marginRight: "10px",
                      marginLeft: "10px",
                      padding: "5px 10px",
                    }}
                  >
                    Tam Zamanlı{" "}
                  </p>
                  <p
                    style={{
                      backgroundColor: "#007456",
                      borderRadius: "10px",
                      padding: "5px 10px",
                    }}
                  >
                    {" "}
                    <GoLocation /> Kayseri{" "}
                  </p>
                </div>
              </div>
              <Card.Text>30 gün İçerisinde Başvurular sona erecek.</Card.Text>
            </Card>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Article;
