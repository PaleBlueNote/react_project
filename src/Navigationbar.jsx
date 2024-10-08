import { Button, Navbar, Container, Nav } from "react-bootstrap";
import Profile from "./Profile";

export default function Navigationbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Profile />
      </Container>
    </Navbar>
  );
}
