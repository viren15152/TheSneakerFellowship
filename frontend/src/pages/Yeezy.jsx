import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

const yeezySneakers = [
  {
    name: "Yeezy Boost 350 V2 MX Rock",
    images: [
      "/sneakers/YEEZY350MXRock.jpg",
      "/sneakers/MX2.jpg",
      "/sneakers/MXBOX.jpg",
    ],
  },
  {
    name: "Yeezy Boost 350 V2 Cinder",
    images: [
      "/sneakers/Cinder1.jpg",
      "/sneakers/Cinder2.jpg",
      "/sneakers/Cinder3.jpg",
    ],
  },
  {
    name: "Yeezy Foam RNR Onyx",
    images: [
      "/sneakers/FoamRunner1.jpg",
      "/sneakers/FoamRNR.jpg",
      "/sneakers/Foam3.jpg",
    ],
  },
  {
    name: "Yeezy Boost 700 V3 Alvah",
    images: [
      "/sneakers/Alvah.jpg",
      "/sneakers/Alvah2.jpg",
      "/sneakers/Alvah.jpg",
    ],
  },
];

function Yeezy() {
  return (
    <Container className="mt-4">
      <h2 className="text-center text-white">YEEZY COLLECTION</h2>
      <Row>
        {yeezySneakers.map((sneaker, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card bg="dark" text="white" className="shadow">
              <Carousel interval={null}> {/* 🔹 Stops Auto-Scroll */}
                {sneaker.images.map((image, i) => (
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${i}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title className="text-center">{sneaker.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Yeezy;

