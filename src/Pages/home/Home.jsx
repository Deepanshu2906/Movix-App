import React from "react";
import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trendng from "./trending/Trendng";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trendng />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
