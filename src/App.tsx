import React, { useEffect } from "react";
import "./assets/css/Main.css";

import NavBar from "./Components/NavBar";
import Hero from "./Components/App/Hero";
import About from "./Components/App/About";
import Services from "./Components/App/Services";
import Works from "./Components/App/Works";
import Process from "./Components/App/Process";
import CTA from "./Components/App/CTA";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "charlzk. | Charles Henry Tinoy";
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <Services />
        <Works />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
