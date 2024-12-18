import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer: React.FC = () => {
  const [hash, setHash] = useState("");

  const vivamusPlaceholder = useRef([
    "Sed",
    "fringilla",
    "tincidunt",
    "porttitor",
  ]);
  const loremIpsumPlaceholder = useRef([
    "Curabitur",
    "consectetur",
    "porta",
    "eros",
    "nec",
  ]);

  const scrollToHandle = (e: React.MouseEvent<HTMLAnchorElement>,ID: string) => {
    e.preventDefault();
    e.stopPropagation();

    const element = document.getElementById(ID);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  useEffect(() => {
    setHash(window.location.hash.split("#")[1] ? window.location.hash.split("#")[1] : "index");
  }, []);

  return (
    <footer className="bg-body-secondary">
      <Container className="py-5">
        <Row className="gap-5 gap-md-0 mb-4">
          <Col md>
            <h1 className="display-6 mb-4">charlzk.</h1>
            <div className="d-flex flex-column gap-3">
              <a href="https://www.facebook.com/Charlzk05/" target="__blank">
                <i className="bi bi-facebook me-3"></i>
                Facebook
              </a>
              <a href="https://x.com/CharliezkieDevs" target="__blank">
                <i className="bi bi-twitter me-3"></i>
                Twitter
              </a>
              <a href="https://www.linkedin.com/in/charles-henry-m-tinoy-jr-275612341/" target="__blank">
                <i className="bi bi-linkedin me-3"></i>
                LinkedIn
              </a>
              <a href="https://github.com/charliezkie-cloud" target="__blank">
                <i className="bi bi-github me-3"></i>
                Github
              </a>
            </div>
          </Col>
          <Col md>
            <h1 className="display-6 mb-4">Contents</h1>
            <div className="d-flex flex-column gap-3">
              {
                (hash === "index") ?
                  <>
                    <a href="#lorem" onClick={(e) => scrollToHandle(e, "hero")}>Hero</a>
                    <a href="#lorem" onClick={(e) => scrollToHandle(e, "services")}>Services</a>
                    <a href="#lorem" onClick={(e) => scrollToHandle(e, "works")}>Works</a>
                    <a href="#lorem" onClick={(e) => scrollToHandle(e, "process")}>Process</a>
                    <a href="#lorem" onClick={(e) => scrollToHandle(e, "about")}>About</a>
                    <a href="#lorem" onClick={(e) => scrollToHandle(e, "contact")}>Contact</a>
                  </> :
                  <>
                    <a href="/Charliezkie-cloud">Hero</a>
                    <a href="/Charliezkie-cloud">Services</a>
                    <a href="/Charliezkie-cloud">Works</a>
                    <a href="/Charliezkie-cloud">Process</a>
                    <a href="/Charliezkie-cloud">About</a>
                    <a href="/Charliezkie-cloud">Contact</a>
                  </>
              }
            </div>
          </Col>
          <Col md>
            <h1 className="display-6 mb-4">Vivamus</h1>
            <div className="d-flex flex-column gap-3">
              {
                vivamusPlaceholder.current.map((item, index) =>
                  <a href="https://www.lipsum.com/" key={index} target="__blank">{item}</a>
                )
              }
            </div>
          </Col>
          <Col md>
            <h1 className="display-6 mb-4">Lorem Ipsum</h1>
            <div className="d-flex flex-column gap-3">
              {
                loremIpsumPlaceholder.current.map((item, index) =>
                  <a href="https://www.lipsum.com/" key={index} target="__blank">{item}</a>
                )
              }
            </div>
          </Col>
        </Row>

        <div className="text-center">
          <small className="fw-lighter">&copy; 2024 Charles Henry Tinoy</small>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
