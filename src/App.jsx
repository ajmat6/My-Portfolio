import React from "react";
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Achievements from './components/achievements/Achievements'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
