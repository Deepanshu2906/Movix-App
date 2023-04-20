import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWraper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const nav = useNavigate();

  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryhandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      nav(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWraper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie  or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryhandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWraper>
    </div>
  );
};

export default HeroBanner;
