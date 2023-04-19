import React from "react";
import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trendng from "./trending/Trendng";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trendng />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
