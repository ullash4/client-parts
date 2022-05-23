import React from "react";
import { useNavigate } from "react-router-dom";

function PartsCard({ product }) {
  const navigate = useNavigate();
  const { name, _id, picture, description, price } = product;
  const handleNavigate = (id) => {
    navigate(`allparts/${id}`);
  };
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-2xl">
      <figure>
        <img className="" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>{description.slice(0, 90)}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleNavigate(_id)}
            className="btn btn-primary"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PartsCard;
