import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";


const mySneakers = [
  {
    name: "",
    image: "/sneakers/Jordan.jpg",
  },
  {
    name: "",
    image: "/sneakers/TSF.jpg",
  },
  {
    name: "",
    image: "/sneakers/TSF2.jpg",
  },
  {
    name: "Nike Air Force 1 Low Tiffany & Co. 1837 UK/US 9.5/10.5 Available",
    image: "/sneakers/NikeAF1Tiffany.jpg",
  },
  {
    name: "Jordan 4 Retro Red Thunder UK/US 5/6-8.5/9.5 Available",
    image: "/sneakers/Jordan 4 Red Thunder.jpg",
  },
  {
    name: "Jordan 5 Retro Off-White Sail UK/US 8.5/9.5 Available",
    image: "/sneakers/Jordan5Off-White-Sail.jpg",
  },
  {
    name: "Nike Dunk Low Dover Street Market Triple Black Velvet UK/US 9/10 Available",
    image: "/sneakers/DMDunk.jpg",
  },
  {
    name: "Jordan 1 Retro High OG Patent Bred UK/US 5/6-8.5/9.5 Available",
    image: "/sneakers/PatentBred.jpg",
  },
  {
    name: "Nike Dunk Low Off-White Lot 24 UK/US 9.5/10.5 Available",
    image: "/sneakers/Off-WhiteDunkLot24.jpg",
  },
];

function Home() {
  const [popularSneakers, setPopularSneakers] = useState([]);

  useEffect(() => {
    const fetchPopularSneakers = async () => {
      try {
        const { data } = await axios.get("http://localhost:5001/api/sneakers/popular");
        setPopularSneakers(data);
      } catch (error) {
        console.error("Error fetching popular sneakers:", error);
      }
    };
    fetchPopularSneakers();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center text-white"></h2>
      <Row>
        {mySneakers.map((sneaker, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card bg="dark" text="white" className="shadow">
              <Card.Img variant="top" src={sneaker.image} alt={sneaker.name} />
              <Card.Body>
                <Card.Title>{sneaker.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="text-center text-white mt-5">Future Releases</h2>
      <Row>
  {popularSneakers.length > 0 ? (
    popularSneakers.map((sneaker, index) => (
      <Col key={index} md={4} className="mb-4">
        <Card bg="dark" text="white" className="shadow">
          <Card.Img 
            variant="top" 
            src={sneaker.thumbnail || "/sneakers/default.jpg"} 
            alt={sneaker.shoeName} 
            onError={(e) => { e.target.src = "/sneakers/default.jpg"; }}
          />
          <Card.Body>
            <Card.Title>{sneaker.shoeName}</Card.Title>
            <Card.Text>{sneaker.brand} - {sneaker.colorway}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))
  ) : (
    <p className="text-center text-white">No popular sneakers found.</p>
  )}
</Row>

    </Container>
  );
}

export default Home;

