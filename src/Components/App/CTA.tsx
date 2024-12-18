import React, { useEffect, useState, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import anime from "animejs";

const CTA: React.FC = () => {
  const [banner, setBanner] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const elements: string[] = [];
    for (let i = 0; i < 100; i++) {
      elements.push("LET'S TALK");
      elements.push("+++");
    }
    setBanner([ ...elements ]);

    const scrollHandle = () => {
      if (hasAnimated.current) return;
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const { innerHeight } = window;

      if (innerHeight >= sectionTop + 300) {
        anime({
          targets: [".cta-anime-1"],
          top: "0px",
          opacity: "100%",
          easing: "easeOutQuint",
          delay: anime.stagger(100),
          duration: 1500
        });
        hasAnimated.current = true;
      }
    }

    window.addEventListener("scroll", scrollHandle);
  }, []);

  return (
    <section ref={sectionRef} className="app-cta bg-body-secondary" id="cta">
      <div className="d-flex justify-content-center align-items-center flex-row overflow-x-hidden text-nowrap gap-3 banner py-2 bg-body-tertiary">
        {
          banner.map((item, index) =>
            <small key={index} className="banner-content">{item}</small>
          )  
        }
      </div>
      <Container className="py-5">
        <div className="header d-flex flex-column align-items-center">
          <small className="mb-4 cta-anime-1">Project in mind?</small>
          <h1 className="display-1 mb-0 cta-anime-1">Let's make your</h1>
          <h1 className="display-1 fancy mb-4 cta-anime-1">Website shine</h1>
          <p className="mb-4 text-center cta-anime-1">Premium web design, webflow, and SEO services to<br/>help your business stand out.</p>
          <Button type="button" variant="primary" className="text-uppercase fw-light cta-anime-1" onClick={() => window.location.href = "/#contact"}>
            Get in touch
            <i className="bi bi-arrow-up-right ms-2"></i>
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default CTA;
