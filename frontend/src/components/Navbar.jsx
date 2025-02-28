import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png"; 

function NavigationBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search/${encodeURIComponent(search)}`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" height="40" className="me-2" /> {/* Logo Fixed */}
          TheSneakerFellowship
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link> {/* Fixed Sign Up Link */}
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
          <Form className="d-flex ms-3" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search Sneakers"
              className="me-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-light" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;



