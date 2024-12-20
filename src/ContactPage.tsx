import React, { useEffect } from "react";
import "./assets/css/Main.css";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact/Contact";

const ContactPage: React.FC = () => {
  useEffect(() => {
      document.title = "charlzk. | Contact";
    }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;
