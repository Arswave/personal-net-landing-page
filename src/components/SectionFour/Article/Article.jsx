import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GrLocation } from "react-icons/gr";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { Col, Row } from "react-bootstrap";

const Article = () => {
  return (
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Col md="4" >
          <Card
            style={{ width: "20rem", padding: "1rem", borderRadius: "1rem" ,margin:"1rem auto"}}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Card.Img
                style={{ width: "3rem" }}
                src="https://personel.net/wp-content/uploads/2023/05/Adsiz-tasarim-2023-05-12T103456.310-3.png"
              />
              <Button
                variant="outline-success"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "2rem",
                }}
              >
                <AiOutlinePlus style={{ marginRight: "1rem" }} />
                Takip Et
              </Button>{" "}
            </div>
            <Card.Body>
              <Card.Title>Vinda Mobilya</Card.Title>
              <Card.Title
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "1rem",
                  marginRight: "3rem",
                }}
              >
                <p>
                  <GrLocation />
                  <span> Kayseri</span>
                </p>

                <p>
                  <i className="fas fa-users" />
                  <span> 10-50</span>
                </p>

                <p>
                  <AiFillStar />
                  <span> 0</span>
                </p>
              </Card.Title>
              <Card.Text>
                Vinda Mobilya olarak, mekanları dönüştürme ve müşterilerimizin
                yaşamlarını iyileştirme konusunda tasarımın gücüne inanıyoruz.
                Mobilyalarımız sadece…
              </Card.Text>
              <div
                style={{
                  fontSize: ".8rem",
                }}
              >
                <span
                  style={{
                    backgroundColor: "green",
                    borderRadius: "1rem",
                    padding: "5px 1rem ",
                  }}
                >
                  <i className="far fa-folder" /> Mobilya
                </span>
              </div>
            </Card.Body>
            <Card.Text>1 mevcut işler</Card.Text>
          </Card>
        </Col>

        <Col md="4">
          <Card
                        style={{ width: "20rem", padding: "1rem", borderRadius: "1rem" ,margin:"1rem auto"}}

          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Card.Img
                style={{ width: "3rem" }}
                src="https://personel.net/wp-content/uploads/2023/05/Adsiz-tasarim-7.png"
              />
              <Button
                variant="outline-success"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "2rem",
                }}
              >
                <AiOutlinePlus style={{ marginRight: "1rem" }} />
                Takip Et
              </Button>{" "}
            </div>
            <Card.Body>
              <Card.Title>Egemen Danışmanlık</Card.Title>
              <Card.Title
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "1rem",
                  marginRight: "3rem",
                }}
              >
                <p>
                  <GrLocation />
                  <span> Kayseri</span>
                </p>

                <p>
                  <i className="fas fa-users" />
                  <span> 200-300</span>
                </p>

                <p>
                  <AiFillStar />
                  <span> 0</span>
                </p>
              </Card.Title>
              <Card.Text>
                Kayseri'nin önde gelen dönemsel personel sağlayan firması olan
                Egemen Danışmanlık, müşterilerine kaliteli ve özelleştirilmiş
                insan…
              </Card.Text>
              <div
                style={{
                  fontSize: "0.8rem",
                }}
              >
                <span
                  style={{
                    backgroundColor: "green",
                    borderRadius: "1rem",
                    padding: "5px 1rem ",
                  }}
                >
                  <i className="far fa-folder" /> İnsan Kaynakları Danışmanlık
                </span>
              </div>
            </Card.Body>
            <Card.Text>1 mevcut işler</Card.Text>
          </Card>
        </Col>
        {/*  */}
        {/*  */}
        <Col md="4" >
          <Card
                       style={{ width: "20rem", padding: "1rem", borderRadius: "1rem" ,margin:"1rem auto"}}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Card.Img
                style={{ width: "3rem" }}
                src="https://personel.net/wp-content/uploads/2023/05/Adsiz-tasarim-7.png"
              />
              <Button
                variant="outline-success"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "2rem",
                }}
              >
                <AiOutlinePlus style={{ marginRight: "1rem" }} />
                Takip Et
              </Button>{" "}
            </div>
            <Card.Body>
              <Card.Title>Personel.net</Card.Title>
              <Card.Title
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "1rem",
                  marginRight: "3rem",
                }}
              >
                <p>
                  <GrLocation />
                  <span> Kayseri</span>
                </p>

                <p>
                  <i className="fas fa-users" />
                  <span>10-50</span>
                </p>

                <p>
                  <AiFillStar />
                  <span> 0</span>
                </p>
              </Card.Title>
              <Card.Text>
                Personel.net, bir iş bulma ve kariyer platformudur. İş arayanlar
                ile işverenleri bir araya getirerek, iş…
              </Card.Text>
              <div
                style={{
                  fontSize: "0.8rem",
                }}
              >
                <span
                  style={{
                    backgroundColor: "green",
                    borderRadius: "1rem",
                    padding: "5px 1rem ",
                  }}
                >
                  <i className="far fa-folder" /> İnsan Kaynakları Danışmanlık
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Article;
