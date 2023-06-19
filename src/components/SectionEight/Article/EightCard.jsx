import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const EightCard = () => {
    return (
        <Row xs={1} md={3} className="g-4">
            <Col md={4} >
                <Card style={{ width: "100%", height: "26rem", border: "none", margin: "1rem auto", backgroundColor: "#F6F6F6" }} >
                    <div className='d-flex '>
                        <Card.Img
                            style={{
                                width: "100%",
                                height: "270px",
                                borderRadius: "5%",
                                objectFit: "cover",
                            }}
                            src='https://personel.net/wp-content/uploads/2023/05/ic-mimarlik-site-resim-20200723160925-scaled.jpg'
                        />
                    </div>

                    <Card.Body>
                        <div className='d-flex flex-row mb-2'>
                            <Card.Title className='fw-light my-2 me-2'>10/05/2023</Card.Title>
                            <Card.Title className='fw-bold my-2 ms-2 '>
                                <a className='text-decoration-none fw-normal text-success' href='/'>Yetenek</a>
                            </Card.Title>
                        </div>

                        <Card.Text>
                            <a href='/' className='text-black fw-bold fs-5 text-decoration-none'>
                                Çizim yeteneğine sahip insanların yapabileceği meslekler
                            </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} >
                <Card style={{ width: "100%", height: "26rem", border: "none", margin: "1rem auto", backgroundColor: "#F6F6F6" }} >
                    <div className='d-flex '>
                        <Card.Img
                            style={{
                                width: "100%",
                                height: "270px",
                                borderRadius: "5%",
                                objectFit: "cover",
                            }}
                            src='https://personel.net/wp-content/uploads/2023/05/4_ways_to_make_a_great_first_impression_at_a_jo.original.png'
                        />
                    </div>

                    <Card.Body>
                        <div className='d-flex flex-row mb-2'>
                            <Card.Title className='fw-light my-2 me-2'>10/05/2023</Card.Title>
                            <Card.Title className='fw-bold my-2 ms-2 '>
                                <a className='text-decoration-none fw-normal text-success' href='/'>Eğitim</a>
                            </Card.Title>
                        </div>

                        <Card.Text>
                            <a href='/' className='text-black fw-bold fs-5 text-decoration-none'>
                                Staj Yapmanın Kariyerindeki Önemi
                            </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} >
                <Card style={{ width: "100%", height: "26rem", border: "none", margin: "1rem auto", backgroundColor: "#F6F6F6" }} >
                    <div className='d-flex '>
                        <Card.Img
                            style={{
                                width: "100%",
                                height: "270px",
                                borderRadius: "5%",
                                objectFit: "cover",
                            }}
                            src='https://personel.net/wp-content/uploads/2023/05/yetkinlik-bazli-mulakat-teknikleri-nelerdir@2x-100.webp'
                        />
                    </div>

                    <Card.Body>
                        <div className='d-flex flex-row mb-2'>
                            <Card.Title className='fw-light my-2 me-2'>10/05/2023</Card.Title>
                            <Card.Title className='fw-bold my-2 ms-2 '>
                                <a className='text-decoration-none fw-normal text-success' href='/'>haberler</a>
                            </Card.Title>
                        </div>

                        <Card.Text>
                            <a href='/' className='text-black fw-bold fs-5 text-decoration-none'>
                                İş Mülakatına Nasıl Hazırlanılır ?
                            </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
export default EightCard
