import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import anime from "animejs";

import logo1 from "../../assets/img/logo/logo-1.svg";
import logo2 from "../../assets/img/logo/logo-2.svg";
import logo3 from "../../assets/img/logo/logo-3.svg";
import logo4 from "../../assets/img/logo/logo-4.svg";
import logo5 from "../../assets/img/logo/logo-5.svg";
import logo6 from "../../assets/img/logo/logo-6.svg";

const Hero: React.FC = () => {
  const [images] = useState([
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
  ]);

  useEffect(() => {
    anime({
      targets: [".hero-anime-1"],
      top: "0px",
      opacity: "100%",
      easing: 'easeOutQuint',
      duration: 1500,
      delay: anime.stagger(100)
    });
  }, []);

  return (
    <section className="app-hero d-flex align-items-center" id="hero">
      <Container className="py-5">
        <div className="mb-3 text-center">
          <h1 className="display-1 hero-anime-1">Web Designer</h1>
          <h1 className="display-2 fancy hero-anime-1">& Developer</h1>
        </div>
        <p className="text-center text-nowrap mb-5 hero-anime-1">Premium web design, development, and SEO<br/>services to help your business stand out.</p>
        <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap hero-anime-1">
          {
            images.map((item, index) =>
              <Image src={item} key={index} />
            )
          }
        </div>
      </Container>
    </section>
  )
}

export default Hero;
