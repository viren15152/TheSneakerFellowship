import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function SearchResults() {
  const { query } = useParams();

  const [sneakers, setSneakers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("🔍 Search Query from URL:", query);

    if (!query) {
      console.error("❌ No search query provided.");
      setError("No search query entered.");
      return;
    }

    const API_URL =
      import.meta.env.VITE_API_URL ||
      "http://localhost:5001";

    const fetchSneakers = async () => {
      try {
        console.log(
          "Fetching from API:",
          `${API_URL}/api/sneakers/search/${query}`
        );

        const { data } = await axios.get(
          `${API_URL}/api/sneakers/search/${query}`
        );

        console.log("✅ API Response:", data);

        if (!Array.isArray(data)) {
          throw new Error(
            "Invalid API response"
          );
        }

        setSneakers(data);
        setError("");
      } catch (error) {
        console.error(
          "❌ Error fetching sneakers:",
          error
        );

        setError("Failed to load sneakers.");
        setSneakers([]);
      }
    };

    fetchSneakers();
  }, [query]);

  return (
    <Container className="mt-4">
      <h2 className="text-center text-white">
        Search Results for "{query}"
      </h2>

      {error ? (
        <p className="text-center text-danger">
          {error}
        </p>
      ) : (
        <Row>
          {sneakers.length > 0 ? (
            sneakers.map((sneaker, index) => (
              <Col
                key={index}
                md={4}
                className="mb-4"
              >
                <Card
                  bg="dark"
                  text="white"
                  className="shadow"
                >
                  <Card.Img
                    variant="top"
                    src={
                      sneaker.thumbnail ||
                      "/sneakers/default.jpg"
                    }
                    alt={sneaker.shoeName}
                    onError={(e) => {
                      e.target.src =
                        "/sneakers/default.jpg";
                    }}
                  />

                  <Card.Body>
                    <Card.Title>
                      {sneaker.shoeName}
                    </Card.Title>

                    <Card.Text>
                      {sneaker.brand} -{" "}
                      {sneaker.colorway}
                    </Card.Text>

                    <a
                      href={
                        sneaker.resellLinks
                          ?.stockX ||
                        "https://stockx.com"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success"
                    >
                      Buy on StockX
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-white">
              No sneakers found.
            </p>
          )}
        </Row>
      )}
    </Container>
  );
}

export default SearchResults;