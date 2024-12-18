import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import anime from "animejs";

import work1 from "../../assets/img/works/work-1.jpg";
import work2 from "../../assets/img/works/work-2.png";
import work3 from "../../assets/img/works/work-3.jpg";
import work4 from "../../assets/img/works/work-4.png";

const Works: React.FC = () => {
  const [images] = useState([
    {
      "cover": work1,
      "title": "GO.ARCH",
      "type": "Design"
    },
    {
      "cover": work2,
      "title": "Agetha Portfolio",
      "type": "Design"
    },
    {
      "cover": work3,
      "title": "Senora",
      "type": "Design"
    },
    {
      "cover": work4,
      "title": "Bona Tattoo",
      "type": "Design"
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
          targets: [".works-anime-1", ".works-anime-2"],
          left: "0px",
          opacity: "100%",
          duration: 1500,
          delay: anime.stagger(100),
          easing: "easeOutQuint"
        });
        hasAnimated.current = true;
      }
    }
    
    window.addEventListener("scroll", scrollHandle);
  }, []);

  return (
    <section ref={sectionRef} className="app-works" id="works">
      <Container className="py-5">
        <h1 className="display-3 text-center text-md-start mb-4">Selected <span className="fancy">Works</span></h1>

        <Row className="gap-2 gap-md-3 px-2">
          <Col md className="d-flex flex-column p-0 gap-2 gap-md-3">
          {
            images.slice(0, 2).map(({ cover, title, type }, index) => 
              <div className="item position-relative rounded works-anime-1" key={index}>
                <Image src={cover} />
                <div className="position-absolute bottom-0 start-0 end-0 m-3 p-3 rounded body">
                  <div className="d-flex flex-row text-nowrap">
                    <div>{title}</div>
                    <small className="w-100 text-end type">{type}</small>
                  </div>
                </div>
              </div>
            )
          }
          </Col>
          <Col md className="d-flex flex-column p-0 gap-2 gap-md-3">
          {
            images.slice(2, 4).map(({ cover, title, type }, index) => 
              <div className="item position-relative rounded works-anime-2" key={index}>
                <Image src={cover} />
                <div className="position-absolute bottom-0 start-0 end-0 m-3 p-3 rounded body">
                  <div className="d-flex flex-row text-nowrap">
                    <div>{title}</div>
                    <small className="w-100 text-end type">{type}</small>
                  </div>
                </div>
              </div>
            )
          }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Works;
