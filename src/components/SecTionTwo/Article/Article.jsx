import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Article = () => {
  return (
    <div style={{ padding: "5rem 0",margin:"0 auto" }}>
      <Row xs={1} md={2} className="g-4">
        <Col md="6" >
          <Card
            style={{
              minWidth: "16rem",
              borderRadius: "2rem",
              backgroundColor: "#FDE7DE",
              margin: "1rem auto",
            }}
          >
            <Card.Body
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "1rem 2rem",
              }}
            >
              <div style={{ minWidth: "7rem", margin:"0 auto" }}>
                <Card.Title style={{ fontSize: "1.45rem" }}>İşveren</Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1.25rem",
                    width: "12rem",
                  }}
                >
                  {" "}
                  Doğru Personeli Bulmanın En Kolay Yolu
                </Card.Text>
                <Card.Title style={{ fontSize: "1.25rem" }}>
                  Personel.net
                </Card.Title>
                <Button
                  variant="success"
                  style={{
                    margin: ".8rem 0",
                    borderRadius: "10rem",
                    padding: ".4rem 1rem",
                  }}
                >
                  iş İlanı Ver
                </Button>{" "}
              </div>
              <Card.Img
                style={{ maxWidth: "12.5rem" }}
                src="https://personel.net/wp-content/uploads/2022/12/banner-home-01.svg"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col md="6" className="g-4 pe-1">
          <Card
            style={{
              minWidth: "18rem",
              borderRadius: "2rem",
              backgroundColor: "#FDE7DE",
              margin: "1rem auto",
            }}
          >
            <Card.Body
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "1rem 2rem",
              }}
            >
             <div style={{ minWidth: "7rem", margin:"0 auto" }}>
                <Card.Title style={{ fontSize: "1.45rem" }}>Aday</Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1.25rem",
                    width: "8rem",
                  }}
                >
                  {" "}
                  İş Aramanın En Kolay Yolu
                </Card.Text>
                <Card.Title
                  style={{ fontSize: "1.25rem", paddingTop: "1.8rem" }}
                >
                  Personel.net
                </Card.Title>
                <Button
                  variant="success"
                  style={{
                    margin: ".8rem 0",
                    borderRadius: "10rem",
                    padding: ".4rem 1rem",
                  }}
                >
                  Özgeçmişini Yükle
                </Button>{" "}
              </div>
              <Card.Img
                style={{ maxWidth: "12.5rem" }}
                src=" https://personel.net/wp-content/uploads/2022/12/banner-home-02.svg"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Article;
