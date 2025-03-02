import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

const nikeSneakers = [
  {
    name: "Nike Air Force 1 Low Tiffany & Co. UK 9.5",
    images: [
      "/sneakers/NikeAF1Tiffany.jpg",
      "/sneakers/TF2.jpg",
    ],
  },
  {
    name: "Nike Air Force 1 Off-White Black UK 5",
    images: [
      "/sneakers/AF1.PNG",
      "/sneakers/AF12.PNG",
      "/sneakers/AF13.PNG",
    ],
  },
  {
    name: "Nike Dunk Low Off-White Lot 24 UK 9.5",
    images: [
      "/sneakers/Off-WhiteDunkLot24.jpg",
      "/sneakers/Off-WhiteDunkLot24-2.jpg",
      "/sneakers/Off-WhiteDunkLot24-3.jpg",
    ],
  },
  {
    name: "Nike Air Max 90 Off-White Black UK 5",
    images: [
      "/sneakers/AF1OF.jpg",
      "/sneakers/AF1OF2.jpg",
      "/sneakers/AF1OF4.jpg",
      "/sneakers/AF1OF3.jpg",
    ],
  },
  {
    name: "Jordan 5 Retro Off-White Sail UK 8.5",
    images: [ "/sneakers/Jordan5Off-White-Sail.jpg",
    ],
  },
  {
    name: "Nike Air Rubber Dunk Off-White University Gold",
    images: [
      "/sneakers/RD.jpg",
      "/sneakers/RD1.jpg",
      "/sneakers/RD2.jpg",
      "/sneakers/RD3.jpg",
    ],
  },
  {
    name: "Nike Blazer Low Off-White University Red UK 6",
    images: [
      "/sneakers/IMG_4156.jpeg",
      "/sneakers/IMG_4154.jpeg",
      "/sneakers/IMG_4162.jpeg",
    ],
  },
  {
    name: "Nike Air Max 90 Desert Ore Black UK 9",
    images: [
      "/sneakers/DO.jpg",
      "/sneakers/DO2.jpg",
      "/sneakers/DO3.jpg",
    ],
  },
  {
    name: "Nike Dunk Low DSM Triple Black Velvet UK 9",
    images: [
      "/sneakers/DMDunk.jpg",
      "/sneakers/DMDunk2.jpg",
      "/sneakers/DMDunk3.jpg",
    ],
  },
  {
    name: "Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold",
    images: [
      "/sneakers/TSAM0.jpg",
      "/sneakers/TSAM1.jpg",
      "/sneakers/TSAM2.jpg",
      "/sneakers/TSAM3.jpg",
      "/sneakers/TSAM4.jpg",
    ],
  },
  {
    name: "Jordan 1 Retro High Satin Snake Chicago (Women's)",
    images: [
      "/sneakers/Jordan1SS.jpg",
      "/sneakers/Jordan1SS1.jpg",
    ],
  },
  {
    name: "Jordan 1 High Zoom Air CMFT Patent Chicago (Women's)",
    images: [
      "/sneakers/Jordan1C.jpg",
      "/sneakers/Jordan1C1.jpg",
      "/sneakers/Jordan1C2.jpg",
    ],
  },
  {
    name: "Jordan 1 Retro High OG Patent Bred",
    images: [
      "/sneakers/PatentBred.jpg",
      "/sneakers/PatentBred1.jpg",
      "/sneakers/PatentBred2.jpg",
      "/sneakers/PatentBred3.jpg",
    ],
  },
  {
    name: "Jordan 1 Retro High Pollen",
    images: [
      "/sneakers/IMG_0344.jpeg",
      "/sneakers/IMG_0346.jpeg",
      "/sneakers/IMG_0354.jpeg",
    ],
  },
  {
    name: "Jordan 1 Retro High Shadow 2.0",
    images: [
      "/sneakers/J1SS.jpg",
      "/sneakers/J1S.jpg",
      "/sneakers/J1S2.jpg",
    ],
  },
  {
    name: "Jordan 1 Retro High Court Purple",
    images: [
      "/sneakers/IMG_0356.jpeg",
      "/sneakers/IMG_0357.jpeg",
      "/sneakers/IMG_0363.jpeg",
    ],
  },
  {
    name: "Jordan 1 Low Diamond Shorts",
    images: [
      "/sneakers/J1L.jpg",
      "/sneakers/J1L1.jpg",
      "/sneakers/J1L3.jpg",
    ],
  },
  {
    name: "Jordan 1 Low SETrue Blue (GS)",
    images: [
      "/sneakers/IMG_4271.jpeg",
      "/sneakers/IMG_4275.jpeg",
      "/sneakers/IMG_4277.jpeg",
    ],
  },
];

function Nike() {
  return (
    <Container className="mt-4">
      <h2 className="text-center text-white">NIKE COLLECTION</h2>
      <Row>
        {nikeSneakers.map((sneaker, index) => (
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

export default Nike;
