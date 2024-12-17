import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import anime from "animejs";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const scrollHandle = () => {
      if (hasAnimated.current) return;
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const { innerHeight } = window;

      if (innerHeight >= sectionTop + 100) {
        anime({
          targets: [".about-anime-1", ".about-anime-2", ".about-anime-3"],
          left: "0px",
          top: "0px",
          opacity: "100%",
          duration: 1000,
          delay: anime.stagger(100),
          easing: "easeOutQuint"
        });
        hasAnimated.current = true;
      }
    }

    window.addEventListener("scroll", scrollHandle);
  }, []);

  return (
    <section ref={sectionRef} className="app-about" id="about">
      <Container className="py-5">
        <Row className="gap-3">
          <Col md>
            <h3 className="text-uppercase about-anime-1">hi i'm</h3>

            <div className="mb-3 text-nowrap d-none d-md-block">
              <h1 className="display-2 mb-0 about-anime-1">Charles Henry</h1>
              <h1 className="fancy text-end display-1 about-anime-1">Tinoy</h1>
            </div>

            <div className="mb-3 text-nowrap text-center d-block d-md-none">
              <h1 className="display-2 mb-0 about-anime-1">Charles Henry <span className="fancy about-anime-3">Tinoy</span></h1>
            </div>

            <div className="text-center text-nowrap fw-lighter about-anime-2"><q> A website that leaves a lasting impression! </q></div>
          </Col>
          <Col md className="d-flex justify-content-center align-items-start flex-column">
            <p className="about-anime-3">Hi, I'm Charles Henry Tinoy - a freelancer specializing in premium web design, development, and SEO services. I'm passionate about creating unique and effective solutions for my clients, and I bring a personal touch to every project. Let's work together to bring your vision to life!</p>
            <div className="d-flex flex-row gap-4">
              <a className="about-anime-2" href="https://www.facebook.com/Charlzk05/" target="__blank"><i className="bi bi-facebook"></i></a>
              <a className="about-anime-2" href="https://x.com/CharliezkieDevs" target="__blank"><i className="bi bi-twitter"></i></a>
              <a className="about-anime-2" href="https://www.linkedin.com/in/charles-henry-m-tinoy-jr-275612341/" target="__blank"><i className="bi bi-linkedin"></i></a>
              <a className="about-anime-2" href="https://github.com/charliezkie-cloud" target="__blank"><i className="bi bi-github"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;
