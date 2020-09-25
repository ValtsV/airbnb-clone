import React from "react";
import "./Card.scss";

const Card = ({ src, title, desc, price }) => {
  return (
    <div className="card">
      <img src={src} alt="card-image" />
      <div className="card-info">
        <h2 className="card-info-title">{title}</h2>
        <p className="card-info-desc">{desc}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
