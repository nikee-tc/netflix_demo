import React from "react";
import "./Movies.css";
import jawan from "../../images/Jawan.jpeg";
import OMG2 from "../../images/OMG2.jpg";
import encanto from "../../images/ENCANTO.jpg";
import ind from "../../images/ind.jpg";
import luca from "../../images/LUCA.jpg";
import tanhaji from "../../images/TANHAJI.jpg";
import singham from "../../images/SINGHAM.jpg";


const Movies = () => {
  const myMovies = { color: "White" };
  return (
    <>
      <div className="card=container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle" style={{ myMovies }}>
              Movies
            </span>
            <img src={jawan} alt="jawan" className="card-media" />
            <img src={OMG2} alt="omg2" className="card-media" />
            <img src={encanto} alt="encanto" className="card-media" />
            <img src={ind} alt="ind" className="card-media" />
            <img src={luca} alt="luca" className="card-media" />
            <img src={tanhaji} alt="tanhaji" className="card-media" />
            <img src={singham} alt="singham" className="card-media" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
