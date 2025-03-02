import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import instagramLogo from "../assets/IG.png";

function Footer() {
  return (
    <Navbar bg="black" variant="dark" className="footer mt-auto">
      <Container className="d-flex flex-column text-center">
        <Nav className="mb-2">
          <Nav.Link as={Link} to="/" className="text-white mx-3 fw-bold text-uppercase">Home</Nav.Link>
          <Nav.Link as="a" href="https://instabio.cc/3040409RUhOOG" target="_blank" rel="noopener noreferrer" className="text-white mx-3 fw-bold text-uppercase">Shop</Nav.Link>
          <Nav.Link as={Link} to="/nike" className="text-white mx-3 fw-bold text-uppercase">Nike</Nav.Link>
          <Nav.Link as={Link} to="/yeezy" className="text-white mx-3 fw-bold text-uppercase">Yeezy</Nav.Link>
          <Nav.Link as={Link} to="/signup" className="text-white mx-3 fw-bold text-uppercase">Sign Up</Nav.Link>
        </Nav>

        <div>
          <a href="https://www.instagram.com/thesneakerfellowship/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" height="30" />
          </a>
        </div>

        <p className="text-white mt-3">&copy; 2024 The Sneaker Fellowship. All rights reserved.</p>
      </Container>
    </Navbar>
  );
}

export default Footer;
