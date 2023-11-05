import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Services from "../components/Services";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="Services"
        btnClass="hide"
      />
      <Services />
      <Footer />
    </>
  );
}

export default Service;
