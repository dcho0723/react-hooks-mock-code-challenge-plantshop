import React, { useState } from "react";

function Search({ searchFunction }) {
  const [ onSearch, setOnSearch ] = useState('')

  searchFunction(onSearch)

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setOnSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
