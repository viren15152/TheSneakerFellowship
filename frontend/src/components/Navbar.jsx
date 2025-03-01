import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import instagramLogo from "../assets/IG.png"; 

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
    <Navbar bg="black" variant="dark" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <img src={logo} alt="Logo" height="40" className="me-2" />
          THESNEAKERFELLOWSHIP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center"> 
            <Nav.Link as={Link} to="/" className="fw-bold text-uppercase me-3">Home</Nav.Link>
            
            {/* Shop - External Link */}
            <Nav.Link 
              as="a" 
              href="https://instabio.cc/3040409RUhOOG" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="fw-bold text-uppercase me-3"
            >
              Shop
            </Nav.Link>

            {/* Nike & Yeezy Links - Nike comes before Yeezy */}
            <Nav.Link as={Link} to="/nike" className="fw-bold text-uppercase me-3">Nike</Nav.Link> 
            <Nav.Link as={Link} to="/yeezy" className="fw-bold text-uppercase me-3">Yeezy</Nav.Link> 

            <Nav.Link as={Link} to="/signup" className="fw-bold text-uppercase me-3">Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/login" className="fw-bold text-uppercase me-3">Login</Nav.Link>
          </Nav>

          {/* Search Bar & Instagram in a Flex Container */}
          <div className="d-flex align-items-center ms-3">
            <Form className="d-flex me-3" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search Sneakers"
                className="me-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button className="custom-search-btn" type="submit">Search</Button>
            </Form>

            {/* Instagram Icon */}
            <a href="https://www.instagram.com/thesneakerfellowship/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" height="40" />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;








