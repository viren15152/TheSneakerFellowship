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

       
        <div class="social-links">
        <a href="https://www.instagram.com/thesneakerfellowship" target="_blank">
            <i class="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://facebook.com" target="_blank">
            <i class="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://twitter.com/" target="_blank">
            <i class="fab fa-twitter"></i> Twitter
        </a>
        <a href="mailto:thesneakerfellowship@gmail.com">
            <i class="fas fa-envelope"></i> Email
        </a>
        <a href="tel:+44943524081">
            <i class="fas fa-phone"></i> Call Us
        </a>
    </div>
    <p className="text-white mt-3">THESNEAKERFELLOWSHIP &copy;</p>
    <i class="fa fa-fire service-icon"></i>
      </Container>
    </Navbar>
  );
}

export default Footer;
