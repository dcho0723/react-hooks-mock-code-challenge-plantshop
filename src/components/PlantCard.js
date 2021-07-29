import React, { useState } from "react";


function PlantCard({ name, image, price }) {
  const[buttonClick, setButtonClick] = useState(false)

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
        <button className={!buttonClick ? "primary": ""} onClick={() => setButtonClick(!buttonClick)}>{!buttonClick ? "In Stock" : "Out Of Stock"}</button>
    </li>
  );
}

export default PlantCard;
