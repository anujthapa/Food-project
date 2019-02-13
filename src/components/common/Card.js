import React from "react";

const Card = ({ title, image, steps }) => {
  return (
    <div>
      <div>{title}</div>
      <img src={image} alt="Foodimage" />
      <div>{steps} </div>
    </div>
  );
};
export default Card;
