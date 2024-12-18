import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Toast, ToastContainer } from "react-bootstrap";
import anime from "animejs";

const Contact: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [toast, setToast] = useState({
    message: "",
    show: false
  });

  const openUrl = (url: string) => {
    window.open(url);
  }

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    anime({
      targets: [".contact-anime-1", ".contact-anime-3"],
      left: "0px",
      top: "0px",
      opacity: "100%",
      delay: anime.stagger(100),
      duration: 1500,
      easing: "easeOutQuint"
    });

    anime({
      targets: [".contact-anime-2",],
      scale: [
        0.2,
        1
      ],
      opacity: "100%",
      delay: anime.stagger(100),
      duration: 1500,
      easing: "easeOutQuint"
    })
  }, []);

  const contactFormOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    const name = form.nameInput.value as string;
    const email = form.email.value as string;
    const message = form.message.value as string;

    if (!form.checkValidity()) {
      return setValidated(true);
    }

    console.log(`Name: ${name.split(" ").map(word => word.charAt(0) + word.slice(1)).join("")}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    if (validated) {
      setValidated(false);
    }

    setToast({
      message: "Your message has been successfully sent!",
      show: true
    });
  }

  const toastOnClose = () => {
    setToast({
      message: toast.message,
      show: false
    });
  }

  return (
    <section className="contact-page-contact">
      <ToastContainer position="bottom-end" className="p-3 position-fixed">
        <Toast show={toast.show} onClose={toastOnClose} delay={5000} autohide>
          <Toast.Header closeButton>
            <strong className="me-auto">Notification</strong>
            <small>Now</small>
          </Toast.Header>
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>

      <Container className="py-5">
        <Row>
          <Col lg className="d-flex align-items-center justify-content-center">
            <div className="text-center mb-5 header">
              <h1 className="display-1 mb-0 contact-anime-1">Let's get</h1>
              <h1 className="display-2 fancy mb-3 contact-anime-1">in touch.</h1>
              <p className="contact-anime-1">Let’s connect and start a conversation!</p>
            </div>
          </Col>
          <Col lg>
            <div className="p-5 bg-body-secondary border mb-2 mb-lg-3 contact-anime-2">
              {/* <div className="text-uppercase mb-4 fw-lighter">Contact</div> */}
              <h1 className="display-4 mb-3">Contact</h1>
              <Form noValidate validated={validated} onSubmit={contactFormOnSubmit}>

                <Form.Floating className="mb-3">
                  <Form.Control type="text" placeholder="" name="nameInput" />
                  <Form.Label className="text-uppercase fw-light opacity-75" pattern="[A-Za-z\s]+" required>Name</Form.Label>
                  <Form.Control.Feedback type="invalid">Only letters allowed.</Form.Control.Feedback>
                </Form.Floating>
                <Form.Floating className="mb-3">
                  <Form.Control type="email" placeholder="" name="email" />
                  <Form.Label className="text-uppercase fw-light opacity-75" required>Email</Form.Label>
                  <Form.Control.Feedback type="invalid">Enter a valid email.</Form.Control.Feedback>
                </Form.Floating>
                <Form.Floating className="mb-3">
                  <Form.Control as="textarea" placeholder="" name="message" style={{ height: "250px" }} required />
                  <Form.Label className="text-uppercase fw-light opacity-75">Message</Form.Label>
                </Form.Floating>
                <div>
                  <Button type="submit" variant="primary" className="text-uppercase w-100">Send message</Button>
                </div>

              </Form>
            </div>

            <Row className="gap-2 gap-lg-0 mb-2 mb-lg-3">
              <Col lg>
                <Button type="button" variant="secondary" onClick={() => openUrl("https://www.facebook.com/Charlzk05/")} className="text-uppercase text-primary w-100 py-3 px-4 fw-light d-flex flex-row contact-anime-3">
                  <div className="flex-grow-1 text-start">
                    <i className="bi bi-facebook me-3"></i>
                    Facebook
                  </div>
                  <i className="bi bi-arrow-up-right me-0 flex-grow-1 text-end"></i>
                </Button>
              </Col>
              <Col lg>
                <Button type="button" variant="secondary" onClick={() => openUrl("https://x.com/CharliezkieDevs")} className="text-uppercase text-primary w-100 py-3 px-4 fw-light d-flex flex-row contact-anime-3">
                  <div className="flex-grow-1 text-start">
                    <i className="bi bi-twitter me-3"></i>
                    Twitter
                  </div>
                  <i className="bi bi-arrow-up-right me-0 flex-grow-1 text-end"></i>
                </Button>
              </Col>
            </Row>

            <Row className="gap-2 gap-lg-0">
              <Col lg>
                <Button type="button" variant="secondary" onClick={() => openUrl("https://www.linkedin.com/in/charles-henry-m-tinoy-jr-275612341/")} className="text-uppercase text-primary w-100 py-3 px-4 fw-light d-flex flex-row contact-anime-3">
                  <div className="flex-grow-1 text-start">
                    <i className="bi bi-linkedin me-3"></i>
                    LinkedIn
                  </div>
                  <i className="bi bi-arrow-up-right me-0 flex-grow-1 text-end"></i>
                </Button>
              </Col>
              <Col lg>
                <Button type="button" variant="secondary" onClick={() => openUrl("https://github.com/charliezkie-cloud")} className="text-uppercase text-primary w-100 py-3 px-4 fw-light d-flex flex-row contact-anime-3">
                  <div className="flex-grow-1 text-start">
                    <i className="bi bi-github me-3"></i>
                    Github
                  </div>
                  <i className="bi bi-arrow-up-right me-0 flex-grow-1 text-end"></i>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
