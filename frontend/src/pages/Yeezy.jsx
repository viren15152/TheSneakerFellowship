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
    name: "Yeezy Foam RNR Ochre",
    images: [
      "/sneakers/IMG_6497.PNG",
      "/sneakers/IMG_6499.PNG",
      "/sneakers/IMG_6498.PNG",
    ],
  },
  {
    name: "Yeezy Boost 700 V3 Azael",
    images: [
      "/sneakers/IMG_6491.PNG",
      "/sneakers/IMG_6492.PNG",
    ],
  },
  {
    name: "Yeezy Boost 700 V3 Mono Safflower",
    images: [
      "/sneakers/Yeezy700Mono.jpg",
      "/sneakers/Yeezy700Mono1.jpg",
      "/sneakers/Yeezy700Mono3.jpg",
      "/sneakers/IMG_6507.PNG",
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
  {
    name: "Yeezy Boost 380 V3 Onyx",
    images: [
      "/sneakers/Yeezy380.jpg",
      "/sneakers/Yeezy3801.jpg",
      "/sneakers/Yeezy3802.jpg",
      "/sneakers/Yeezy3803.jpg",
    ],
  },
  {
    name: "Yeezy Boost 500 Clay Brown",
    images: [
      "/sneakers/Yeezy500CB.jpg",
      "/sneakers/Yeezy500CB1.jpg",
    ],
  },
  {
    name: "Yeezy Slide Bone",
    images: [
      "/sneakers/YeezySlideBone.jpg",
      "/sneakers/YeezySlideBone1.jpg",
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

