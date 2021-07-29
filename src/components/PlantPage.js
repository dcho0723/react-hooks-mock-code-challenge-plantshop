import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([])
  const [onSearch, setOnSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json()) 
    .then(data => setPlantData(data))
  }, [])

  function searchFunction(searchTerm) {
    setOnSearch(searchTerm)
  }
  const filteredSearch = plantData.filter(plant => plant.name.toLowerCase().includes(onSearch.toLowerCase()))

  return (
    <main>
      <NewPlantForm setPlantData={setPlantData}/>
      <Search searchFunction={searchFunction}/>
      <PlantList plantData={filteredSearch}/>
    </main>
  );
}

export default PlantPage;
