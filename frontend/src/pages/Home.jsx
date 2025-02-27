import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const { data } = await axios.get("http://localhost:5001/api/sneakers/popular");
        console.log("API Response:", data); // ✅ Debugging API Response

        if (Array.isArray(data)) {
          setSneakers(data);
        } else {
          console.error("Expected an array but got:", data);
          setSneakers([]); // Ensure sneakers is always an array
        }
      } catch (error) {
        console.error("Error fetching sneakers:", error);
        setSneakers([]);
      }
    };

    fetchSneakers();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center text-white">Most Popular Sneakers</h2>
      <Row>
        {sneakers.length > 0 ? (
          sneakers.map((sneaker) => (
            <Col key={sneaker.styleID} md={4} className="mb-4">
              <Card bg="dark" text="white" className="shadow">
                <Card.Img variant="top" src={sneaker.thumbnail} alt={sneaker.shoeName} />
                <Card.Body>
                  <Card.Title>{sneaker.shoeName}</Card.Title>
                  <Card.Text>{sneaker.description}</Card.Text>
                  <Button variant="primary" href={sneaker.resellLinks?.stockX} target="_blank">
                    Buy on StockX
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-white">No sneakers found</p>
        )}
      </Row>
    </Container>
  );
}

export default Home;
