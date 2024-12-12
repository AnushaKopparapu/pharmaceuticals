import React from "react";
import { Container } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid className="footer-text">
        <p>&copy; {new Date().getFullYear()}Pharmaceuticals</p>
      </Container>
    </footer>
  );
}

export default Footer;
