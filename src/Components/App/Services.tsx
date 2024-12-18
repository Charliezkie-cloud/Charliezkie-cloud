import React, { useState, useEffect, useRef } from "react";
import { Container, Card, CardBody, CardTitle, CardText, Row, Col } from "react-bootstrap";
import anime from "animejs";

const Services: React.FC = () => {
  const [cardsContent] = useState([
    {
      title: "WEB DESIGN",
      text: "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
      url: "https://www.webdesign.org/",
      urlDisplay: "WEBDESIGN"
    },
    {
      title: "DEVELOPMENT",
      text: "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.",
      url: "https://webflow.com/",
      urlDisplay: "WEBFLOW"
    },
    {
      title: "CONTENT & SEO",
      text: "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
      url: "https://www.seo.com/",
      urlDisplay: "SEO"
    },
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const scrollHandle = () => {
      if (hasAnimated.current) return;
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const { innerHeight } = window;
  
      if (innerHeight >= sectionTop + 300) {
        anime({
          targets: [".services-anime-1"],
          top: "0px",
          opacity: "100%",
          easing: 'easeOutQuint',
          duration: 1500,
          delay: anime.stagger(100)
        });
        hasAnimated.current = true;
      }
    }

    window.addEventListener("scroll", scrollHandle);
  }, []);

  return (
    <section ref={sectionRef} className="app-services" id="services">
      <Container className="py-5">
        <h1 className="display-3 text-center mb-4">Services</h1>
        <Row className="gap-3 gap-md-0">
          {
            cardsContent.map(({ title, text, url, urlDisplay }, index) =>
              <Col key={index} md>
                <Card className="w-100 h-100 services-anime-1">
                  <CardBody>
                    <small>0{index + 1}</small>
                    <CardTitle className="mt-2">{title}</CardTitle>
                    <CardText>{text}</CardText>
                    <a href={url} target="__blank">
                      <i className="bi bi-arrow-up-right-circle me-2"></i>
                      About {urlDisplay}
                    </a>
                  </CardBody>
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  )
}

export default Services;
