import React from "react";

const Card = ({ title, img, ingredients }) => {
  return (
    <div class="card " style={{ width: "18rem" }}>
      <img class="card-img-top" src={img} alt="Card image cap" />
    </div>
  );
};
export default Card;
