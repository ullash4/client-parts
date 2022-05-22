import React from "react";

function PartsCard({ product }) {
  const { name, picture, description, price } = product;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img className="w-[286px] h-[286px]" src={picture} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{price}</p>
        <p>{description.slice(0, 90)}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default PartsCard;
