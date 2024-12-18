import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import anime from "animejs";

const NavBar: React.FC = () => {
  const [offcanvasToggle, setOffcanvasToggle] = useState(false);
  const [hash, setHash] = useState("");

  const scrollToHandle = (ID: string) => {
    setOffcanvasToggle(false);

    setTimeout(() => {
      const element = document.getElementById(ID);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 500);
  }

  const offcanvasToggleHandle = () => {
    setOffcanvasToggle(!offcanvasToggle);
  }

  useEffect(() => {
    anime({
      targets: [".navbar-anime-1", ".navbar-anime-2", ".navbar-anime-3"],
      top: "0px",
      left: "0px",
      opacity: "100%",
      easing: 'easeOutQuint',
      duration: 1500
    });

    setHash(window.location.hash.split("#")[1] ? window.location.hash.split("#")[1] : "index");
  }, []);
  
  return (
    <Navbar expand="lg">
      <Container className="p-2">
        <Navbar.Brand className="navbar-anime-1">charlzk.</Navbar.Brand>
        <Navbar.Toggle onClick={offcanvasToggleHandle} className="navbar-anime-2"/>
        <Navbar.Offcanvas show={offcanvasToggle} onHide={offcanvasToggleHandle} className="bg-body-secondary navbar-anime-3">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>charlzk.</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 gap-3">
              {
                (hash === "index") ?
                  <>
                    <Nav.Link onClick={() => scrollToHandle("services")}>Services</Nav.Link>
                    <Nav.Link onClick={() => scrollToHandle("works")}>Works</Nav.Link>
                    <Nav.Link onClick={() => scrollToHandle("process")}>Process</Nav.Link>
                    <Nav.Link onClick={() => scrollToHandle("about")}>About</Nav.Link>
                    <Nav.Link onClick={() => scrollToHandle("cta")}>Call to Action</Nav.Link>
                  </> : null
              }
              {
                (hash === "contact") ?
                  <>
                    <Button type="button" variant="primary" onClick={() => window.location.href = "/Charliezkie-cloud"}>
                      Go Back
                      <i className="bi bi-arrow-up-right ms-2"></i>
                    </Button>
                  </> : null
              }
              {
                (hash !== "contact") ?
                  <Button type="button" variant="primary" onClick={() => window.location.href = "#contact"}>
                    Get in touch
                    <i className="bi bi-arrow-up-right ms-2"></i>
                  </Button> :
                  null
              }
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavBar;
