import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function SearchResults() {
  const { query } = useParams(); // Get the search query from the URL
  const [sneakers, setSneakers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("🔍 Search Query from URL:", query); // 

    if (!query) {
      console.error("❌ No search query provided.");
      setError("No search query entered.");
      return;
    }
    const API_URL = import.meta.env.VITE_API_URL || "";

    const fetchSneakers = async () => {
      try {
        console.log("Fetching from API:", `${API_URL}/api/sneakers/search/${query}`);
        const { data } = await axios.get(`${API_URL}/api/sneakers/search/${query}`);
    
        console.log("✅ API Response:", data);
        if (!Array.isArray(data)) throw new Error("Invalid API response");
    
        setSneakers(data);
      } catch (error) {
        console.error("❌ Error fetching sneakers:", error);
        setError("Failed to load sneakers.");
      }
    };    

    fetchSneakers();
  }, [query]);

  return (
    <Container className="mt-4">
      <h2 className="text-center text-white">Search Results for "{query}"</h2>

      {error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <Row>
          {sneakers.map((sneaker, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card bg="dark" text="white" className="shadow">
                <Card.Img variant="top" src={sneaker.thumbnail || "/sneakers/default.jpg"} alt={sneaker.shoeName} />
                <Card.Body>
                  <Card.Title>{sneaker.shoeName}</Card.Title>
                  <Card.Text>{sneaker.brand} - {sneaker.colorway}</Card.Text>
                  <a href={sneaker.resellLinks?.stockX} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                    Buy on StockX 
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default SearchResults;


