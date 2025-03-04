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
    image: "/sneakers/P11.jpg",
  },
  {
    name: "Nike Air Force 1 Low Tiffany & Co. 1837 UK 9.5 Available",
    image: "/sneakers/NikeAF1Tiffany.jpg",
  },
  {
    name: "Nike SB Dunk Low Travis Scott UK 9 Available",
    image: "/sneakers/IMG_9488.jpeg",
  },
  {
    name: "Jordan 4 Retro Red Thunder UK 5-8.5 Available",
    image: "/sneakers/Jordan 4 Red Thunder.jpg",
  },
  {
    name: "Nike Dunk Low Dover Street Market Triple Black Velvet UK 9 Available",
    image: "/sneakers/DMDunk.jpg",
  },
  {
    name: "Nike Dunk Low EMB NBA 75th Anniversary Chicago UK 4-6 Available",
    image: "/sneakers/DunkLowC.jpg",
  },
  {
    name: "Nike Dunk Low Off-White Lot 24 UK 9.5 Available",
    image: "/sneakers/Off-WhiteDunkLot24.jpg",
  },
  {
    name: "Jordan 1 Retro Low OG SP Travis Scott Mocha UK 9.5 Available",
    image: "/sneakers/IMG_6466.jpeg",
  },
  {
    name: "",
    image: "/sneakers/GHGG.JPG",
  },
  {
    name: "Jordan 4 Retro Off-White Sail (Women's) UK 6.5 Available",
    image: "/sneakers/IMG_6447.jpeg",
  },
];

function Home() {
  const API_URL = import.meta.env.VITE_API_URL || "";
  const [popularSneakers, setPopularSneakers] = useState([]);

  useEffect(() => {
    const fetchPopularSneakers = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/sneakers/popular`);
        console.log("📢 API Response for Popular Sneakers:", data); // Debugging line
  
        // Ensure it's always an array
        setPopularSneakers(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("❌ Error fetching popular sneakers:", error);
        setPopularSneakers([]); // Prevents crashes
      }
    };
  
    fetchPopularSneakers();
  }, [API_URL]);  

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

