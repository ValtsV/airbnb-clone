import React from "react";
import "./Home.scss";
import Banner from "./Banner";
import HomeSection from "./HomeSection";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home-section">
        <HomeSection />
      </div>
    </div>
  );
};

export default Home;
