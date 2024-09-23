import NavBar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <section className="heroSection" id="heroSection">
        
        <NavBar />
        <video autoPlay loop muted playsInline className="background-video" >
        <source src="/food_Serving.mp4" type="video/mp4" />
      </video>

      </section>
    </>
  );
};

export default HeroSection;
