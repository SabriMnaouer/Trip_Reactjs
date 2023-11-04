import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import HeroImg from "../assets/trip.jpg";
import DestinationData from "../components/DestinationData";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroImg}
        title="Transform your adventure into your narrative"
        text="Select the destination that resonates with your heart."
        url="/"
        btnText="Plan Your Journey"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
    </>
  );
}

export default Home;
