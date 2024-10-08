import React from "react";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Header from "./components/layouts/Header";
import Available from "./components/Available";
import Footer from "./components/layouts/Footer";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Faq from "./components/Faq";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Available />
      <About />
      <CallToAction />
      <Faq />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
