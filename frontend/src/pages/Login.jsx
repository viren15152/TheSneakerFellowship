import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      alert("Login failed");
    }
  };
  
  return (
    <Container className="mt-5">
      <h2 className="text-white text-center">Login</h2>
      <Form onSubmit={handleSubmit} className="text-white">
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="password" className="mt-2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3 w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
