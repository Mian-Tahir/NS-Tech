import React from 'react';
import Navbar from './components/navbar';
import AboutUS from './components/aboutus';
import Home from "./components/home";
import Footer from './components/footer';
import Services from './components/services';
import OurTeam from './components/ourTeam';
import ContactUs from './components/contactus';
import Section from './components/sectiondivider';
import './App.css';
function App() {
  return (
    <>
      <div>
        <Navbar />

        <Section id="home">
          <Home />
        </Section>

        <Section id="about">
          <AboutUS />
        </Section>

        <Section id="services">
          <Services />
        </Section>

        <Section id="team">
          <OurTeam />
        </Section>

        <Section id="contact">
          <ContactUs />
        </Section>

        <Footer />
      </div>
    </>
  );
}

export default App;
