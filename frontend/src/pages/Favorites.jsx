import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("http://localhost:5001/api/user/saved", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFavorites(data.savedSearches);
    };
    fetchFavorites();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center text-white">Your Favorite Sneakers</h2>
      <Row>
        {favorites.map((fav, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card bg="dark" text="white" className="shadow">
              <Card.Body>
                <Card.Title>{fav}</Card.Title>
                <Button variant="danger">Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Favorites;
