import HeroSection from "../Components/HeroSection";
import Qualities from "../Components/Qualities";
import About from "./About";
import Menu from "../Components/Menu";
import WhoAreWe from "../Components/WhoAreWe";
import Team from "../Components/Team";
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or loading time
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-skeleton-combined">
          {/* Combined skeleton layout */}
          <Skeleton height={100} width={"100%"} />
          <Skeleton height={400} width={"80%"} style={{ margin: "20px auto" }} />
          <Skeleton height={200} width={"90%"} style={{ margin: "20px auto" }} />
        </div>
      ) : (
        <>
          <HeroSection />
          <About />
          <Qualities />
          <Menu />
          <WhoAreWe />
          <Team />
        </>
      )}
    </>
  );
};

export default Home;
