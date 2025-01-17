import React, { useState } from "react";

function NewPlantForm({ setPlantData }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)


  function handleSubmit(e) {
    e.preventDefault()
    const newPlant = {name, image, price}

    setPlantData((prevPlants) => {
      const newPlantArr = [... prevPlants, newPlant]
      setPlantData(newPlantArr)
    })

    // fetch('http://localhost:6001/plants', {
    //   method: 'POST',
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(newPlantArr)
    // })
    // .then(res => res.json())
    // .then(data => setPlantData(data))


    e.target.reset()
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={e => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={e => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={e => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
