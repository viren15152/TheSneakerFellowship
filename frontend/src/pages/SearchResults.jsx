import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";

function SearchResults() {
  const { query } = useParams();
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5001/api/sneakers/search/${query}`);
        console.log("Search API Response:", data); // Debugging API response
        setSneakers(Array.isArray(data) ? data : []); // Ensure it is always an array
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSneakers([]);
      }
    };
    fetchSearchResults();
  }, [query]);

  return (
    <Container>
      <h2 className="text-white text-center">Search Results for "{query}"</h2>
      <Row>
        {sneakers.length > 0 ? (
          sneakers.map((sneaker) => (
            <Col key={sneaker.styleID} md={4}>
              <Card bg="dark" text="white" className="mb-3">
                <Card.Img variant="top" src={sneaker.thumbnail} />
                <Card.Body>
                  <Card.Title>{sneaker.shoeName}</Card.Title>
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

export default SearchResults;
