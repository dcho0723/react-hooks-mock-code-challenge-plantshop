import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData }) {

  const plantComponent = plantData.map(plant => {
    return <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price} />
  })

  return (
    <ul className="cards">
      {plantComponent}
      </ul>
  );
}

export default PlantList;
