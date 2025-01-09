import React, { useState } from 'react';

const Searchbar = ({ setResult,setClicked }) => {
  const [input, setInput] = useState("");
  const [results, setLocalResults] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [dropdown, setDropdown] = useState(true);

  const fetchData = (value) => {
    fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
      .then((response) => response.json())
      .then((json) => {
        const filteredResult = json.data.filter((user) => {
          return value && user && user.city && user.city.toLowerCase().includes(value);
        });
        setLocalResults(filteredResult);
      });
  };
  

  const handleChange = (value) => {
    setInput(value);
    setDropdown(true)
    fetchData(value);
  };

  const handleSearch = ()=>{
    setDropdown(false);
    setClicked(true);
  }

  const containerStyle = {
    position: "relative",// Parent is relatively positioned
    marginTop:"30px" 
  };

  const dropdownStyle = {
    position: "absolute", // Dropdown is absolutely positioned
    top: "100%", // Positioned below the input field
    left: "0",
    width: "90%",
    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 10px grey",
    backgroundColor: "#ddd",
    marginTop: "0.5rem",
    overflowY: "scroll",
    maxHeight: "200px",
    paddingLeft: "10px",
    borderRadius: "20px",
    zIndex: "1000", 
  };

  return (
    <div style={containerStyle}>
      <div className="container-fluid">
        <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control me-2 bg-dark"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            style={{ color: "white" }}
          />
          <button className="btn btn-outline-success" type="submit" onClick={()=> handleSearch()}>
            Search
          </button>
        </form>
      </div>
      {dropdown && (
        <div style={dropdownStyle}>
          {results.map((result, id) => {
            const baseStyle = {
              padding: "0px 10px",
              backgroundColor: hoveredId === id ? "#f0f0f0" : "#ddd",
              cursor: "pointer",
              transition: "background-color 0.3s",
              color: "black",
            };

            return (
              <div
                key={id}
                className="SearchResult"
                style={baseStyle}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => {setInput(result.city); // Update the input field
                    setResult(result.city); // Set the selected value in parent state
                    setDropdown(false); // Close the dropdown
                }}
              >
                {result.city}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
