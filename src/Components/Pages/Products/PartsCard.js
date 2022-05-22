import React from "react";
import { useNavigate } from "react-router-dom";

function PartsCard({ product }) {
  const navigate = useNavigate()
  const { name, _id, picture, description, price } = product;
  const handleNavigate=(id)=>{
    navigate(`allparts/${id}`)
  }
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img className="w-[286px] h-[286px]" src={picture} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>Price: {price}</p>
        <p>{description.slice(0, 90)}</p>
        <div class="card-actions justify-end">
          <button onClick={()=>handleNavigate(_id)} class="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default PartsCard;
