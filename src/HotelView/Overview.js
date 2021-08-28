import React from "react";
import iconStar from "../img/SVG/star.svg";
import iconLocation from "../img/SVG/location-pin.svg";

const Overview = () => {
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>

      <div className="overview__stars">
        <img className="overview__icon-star" src={iconStar} alt="icon star" />
        <img className="overview__icon-star" src={iconStar} alt="icon star" />
        <img className="overview__icon-star" src={iconStar} alt="icon star" />
        <img className="overview__icon-star" src={iconStar} alt="icon star" />
        <img className="overview__icon-star" src={iconStar} alt="icon star" />
      </div>

      <div className="overview__location">
        <img
          className="overview__icon-location"
          src={iconLocation}
          alt="icon-location"
        />
        <button className="btn-inline">Albufeira, Portugal</button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 votos</div>
      </div>
    </div>
  );
};

export default Overview;
