import React from "react";
import netflix_img from "../../src/images/netflix.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <img
      src={netflix_img}
      alt="logo"
      height="10%"
      style={{ maxHeight: "80px", margin: "1rem 0" }}
    />
  );
};

export default Header;
