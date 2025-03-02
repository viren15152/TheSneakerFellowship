import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "";

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const { data } = await axios.post(`${API_URL}/api/auth/register`, {
        name,
        email,
        password,
      });
  
      if (data.success) {
        navigate("/login"); // Redirect to login after successful signup
      }
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed");
    }
  };
  
  return (
    <Container className="mt-4">
      <h2 className="text-center text-white">Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="name">
          <Form.Label className="text-white">Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className="text-white">Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
