import React, { useEffect, useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import anime from "animejs";

const Process: React.FC = () => {
  const row1 = useRef<HTMLDivElement>(null);
  const row2 = useRef<HTMLDivElement>(null);
  const row3 = useRef<HTMLDivElement>(null);
  const row4 = useRef<HTMLDivElement>(null);
  const row5 = useRef<HTMLDivElement>(null);

  const row1HasAnimated = useRef(false);
  const row2HasAnimated = useRef(false);
  const row3HasAnimated = useRef(false);
  const row4HasAnimated = useRef(false);
  const row5HasAnimated = useRef(false);

  useEffect(() => {
      const scrollHandle = () => {
        const { innerHeight } = window;
        if (!row1.current) return;
        if (!row2.current) return;
        if (!row3.current) return;
        if (!row4.current) return;
        if (!row5.current) return;

        const animate = (target: string) => {
          anime({
            targets: [target],
            top: "0px",
            opacity: "100%",
            easing: "easeOutQuint",
            duration: 1500
          });
        }
        
        const row1Top = row1.current?.getBoundingClientRect().top;
        const row2Top = row2.current?.getBoundingClientRect().top;
        const row3Top = row3.current?.getBoundingClientRect().top;
        const row4Top = row4.current?.getBoundingClientRect().top;
        const row5Top = row5.current?.getBoundingClientRect().top;

        if (innerHeight >= row1Top + 50) {
          if (!row1HasAnimated.current) {
            animate(".process-anime-1");
            row1HasAnimated.current = true;
          }
        }
        if (innerHeight >= row2Top + 50) {
          if (!row2HasAnimated.current) {
            animate(".process-anime-2");
            row2HasAnimated.current = true;
          }
        }
        if (innerHeight >= row3Top + 50) {
          if (!row3HasAnimated.current) {
            animate(".process-anime-3");
            row3HasAnimated.current = true;
          }
        }
        if (innerHeight >= row4Top + 50) {
          if (!row4HasAnimated.current) {
            animate(".process-anime-4");
            row4HasAnimated.current = true;
          }
        }
        if (innerHeight >= row5Top + 50) {
          if (!row5HasAnimated.current) {
            animate(".process-anime-5");
            row5HasAnimated.current = true;
          }
        }
      }
      
      window.addEventListener("scroll", scrollHandle);
    }, []);

  return (
    <section className="app-process" id="process">
      <Container className="py-5">
        <div className="text-center mb-5 header">
          <h1 className="display-1 mb-0 ">Your Website</h1>
          <h1 className="display-2 fancy mb-3 ">in 5 steps</h1>
          <p>My process ensures that we create a website<br/>tailored to your business needs.</p>
        </div>

        <Row ref={row1} className="gap-2 gap-md-0 flex-column-reverse flex-md-row mb-3 mb-md-0 process-anime-1">
          <Col md className="px-md-0">
            <Card>
              <Card.Body className="position-relative">
                <small className="text-uppercase p-2 time position-absolute top-0 end-0 m-3 rounded">2 hours</small>
                <small>Do we match?</small>
                <Card.Title className="mt-2">Discovery Call</Card.Title>
                <Card.Text className="mb-3">Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?</Card.Text>
                <ul className="d-flex flex-column gap-3">
                  <li>We get to know each other better</li>
                  <li>Determine how I can best assist you</li>
                  <li>Understand the goals you have for your website</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md className="px-md-0 d-flex justify-content-center align-items-center position-relative">
            <div className="right-triangle"></div>
            <h1 className="display-1">01</h1>
          </Col>
        </Row>

        <Row ref={row2} className="gap-2 gap-md-0 mb-3 mb-md-0 process-anime-2">
          <Col md className="px-md-0 d-flex justify-content-center align-items-center position-relative">
          <div className="left-triangle"></div>
            <h1 className="display-1">02</h1>
          </Col>
          <Col md className="px-md-0">
            <Card>
              <Card.Body className="position-relative">
                <small className="text-uppercase p-2 time position-absolute top-0 end-0 m-3 rounded">1 week</small>
                <small>Framework & Tactics</small>
                <Card.Title className="mt-2">Concept & Strategy</Card.Title>
                <Card.Text className="mb-3">Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.</Card.Text>
                <ul className="d-flex flex-column gap-3">
                  <li>UX Design</li>
                  <li>Wireframes</li>
                  <li>Interactive Prototype</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row ref={row3} className="gap-2 gap-md-0 flex-column-reverse flex-md-row mb-3 mb-md-0 process-anime-3">
          <Col md className="px-md-0">
            <Card>
              <Card.Body className="position-relative">
                <small className="text-uppercase p-2 time position-absolute top-0 end-0 m-3 rounded">1 week</small>
                <small>Some Magic</small>
                <Card.Title className="mt-2">Web Design</Card.Title>
                <Card.Text className="mb-3">Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.</Card.Text>
                <ul className="d-flex flex-column gap-3">
                  <li>High-end web design tailored to your brand</li> 
                  <li>Interactive prototype of the design</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md className="px-md-0 d-flex justify-content-center align-items-center position-relative">
            <div className="right-triangle"></div>
            <h1 className="display-1">03</h1>
          </Col>
        </Row>

        <Row ref={row4} className="gap-2 gap-md-0 mb-3 mb-md-0 process-anime-4">
          <Col md className="px-md-0 d-flex justify-content-center align-items-center position-relative">
            <div className="left-triangle"></div>
            <h1 className="display-1">04</h1>
          </Col>
          <Col md className="px-md-0">
            <Card>
              <Card.Body className="position-relative">
                <small className="text-uppercase p-2 time position-absolute top-0 end-0 m-3 rounded">2 weeks</small>
                <small>More Magic</small>
                <Card.Title className="mt-2">Development</Card.Title>
                <Card.Text className="mb-3">In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.</Card.Text>
                <ul className="d-flex flex-column gap-3">
                  <li>Custom framer website</li>
                  <li>Modular web design systems</li>
                  <li>CMS integration</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row ref={row5} className="gap-2 gap-md-0 flex-column-reverse flex-md-row mb-3 mb-md-0 process-anime-5">
          <Col md className="px-md-0">
            <Card>
              <Card.Body className="position-relative">
                <small className="text-uppercase p-2 time position-absolute top-0 end-0 m-3 rounded">2 hours</small>
                <small>Ready to go</small>
                <Card.Title className="mt-2">Website Onboarding</Card.Title>
                <Card.Text className="mb-3">In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that.</Card.Text>
                <ul className="d-flex flex-column gap-3">
                  <li>Personal workshop</li> 
                  <li>Personalized video tutorials</li>
                  <li>Edit text and images directly on your website</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md className="px-md-0 d-flex justify-content-center align-items-center position-relative">
            <div className="right-triangle"></div>
            <h1 className="display-1">05</h1>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default Process;
