import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
// import Features from "./sections/Features";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Skills from "./sections/Skills";
import Experiance from "./sections/Experiance";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Header />
      <Hero />
      {/* <Features /> */}
      <About />
      <Skills />
      <Projects />
      <Experiance />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
