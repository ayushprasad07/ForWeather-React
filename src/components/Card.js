import React, { useState,useEffect } from 'react'
// import weather from './weather.jpg'
// import district from "./districts"
import 'bootstrap-icons/font/bootstrap-icons.css';
// import state from './states'
// import Lists from './Lists';
import Properties from './Properties';
import Searchbar from './Searchbar';

export default function Card() {
  const [result, setResult] = useState('');
  const [temperature, setTemperature] = useState('');
  const [icon, setIcon] = useState('');
  const [about, setAbout] = useState('');
  const [air, setAir] = useState('');
  const [uv, setUv] = useState('');
  const [humid, setHumid] = useState('');
  const [pressure, setPressure] = useState('');
  const [clicked, setClicked] = useState(false);

  
  const day = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  // const selectStyle = {
  //   width: "20%",
  //   backgroundColor: "rgba(255, 255, 255, 0)",
  //   backdropFilter: "blur(20px)",
  //   color: "white",
  //   margin: "5% 0% 5% 0%"
  // };

  // const mainCardStyle = {
  //   minWidth: "100%",
  //   maxHeight: "100%",
  //   boxShadow: "0px 0px 30px white",
  //   backdropFilter: "blur(20px)",
  //   color: "white",
  //   backgroundColor: "rgba(255, 255, 255, 0)",
  //   borderRadius: "20px"
  // };

  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   setSelectedDistrict('Districts'); 
  // };

  // const handleDistChange = (event) => {
  //   const dist = event.target.value;
  //   setSelectedDistrict(dist);
  //   handleUpdate(dist); 
  // };

  useEffect(() => {
    const fetchWeather = async () => {
      if (clicked) {
       
        const url = `https://cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/current.json?key=d562892654984c76a8965855242710&q=${result}&aqi=no`;

        
        try {
          
          const response = await fetch(url);
          

          const data = await response.json();
          

          // Extract the weather data
          setTemperature(data.current.temp_c);
          setIcon(data.current.condition.icon);
          setAbout(data.current.condition.text);
          setAir(data.current.wind_kph);
          setUv(data.current.uv);
          setHumid(data.current.humidity);
          setPressure(data.current.pressure_mb);

          
        } catch (error) {
          console.error('Error fetching weather data:', error);
          // Reset progress in case of error
        }
      }
    };

    if (clicked) {
      fetchWeather();
    }
  }, [clicked, result]);// Add the necessary dependencies
  

  return (
    // <div className="container d-flex justify-content-center align-items-center" style={{ width: "60%", minHeight: "100vh" }}>
    //   <div className="card" style={mainCardStyle}>
    //     <img src={weather} className="card-img" alt="..." style={{ height: "80vmin", borderRadius: "20px" }} />
    //     <div className="card-img-overlay">
    //       <h5 className="card-title"><strong>ForWeather</strong></h5>
    //       {/* <div className="dropdown-container d-flex justify-content-around align-items-center"> */}
    //         {/* <select className="form-select" aria-label="Default select example" style={selectStyle} onChange={handleChange} value={selectedOption}>
    //           <option value="" disabled>Select a State</option>
    //           {state.map((count, index) => (
    //             <Lists key={index} count={`${count}`} />
    //           ))}
    //         </select>
    //         {district && (
    //           <select
    //             className="form-select"
    //             aria-label="Default select example"
    //             style={selectStyle}
    //             onChange={handleDistChange}
    //             value={selectedDistrict} 
    //           >
    //             <option value="Districts" disabled>Select a District</option>
    //             {district
    //               .find((item) => item.state === selectedOption)
    //               ?.districts.map((dist, index) => (
    //                 <Lists key={index} count={dist} />
    //               ))}
    //           </select>
    //         )}
    //       </div> */}
          
    //         <Searchbar setResult={setResult} setClicked={setClicked}/>
    //       {/* <div className="d-flex justify-content-around align-items-center">
    //         <p>Selected state: {selectedOption || "None"}</p>
    //         <p>Selected district: {selectedDistrict || "None"}</p>
    //       </div> */}

    //       <div className="d-flex justify-content-around align-items-center" style={{ fontSize: "300%", margin: "5% 0 5% 0", height: "15%", width: "100%" }}>
    //         {temperature &&
    //           <p className="card-text">{temperature}<i className="bi bi-thermometer"></i></p>}
    //         <div className="d-flex justify-content-around align-items-center">
    //           {icon &&
    //             <img src={icon} alt="icon" style={{ height: "15vmin" }} />}
    //           <p className="card-text info">{about}</p>
    //         </div>
    //       </div>
    //       <Properties air={air} uv={uv} humid={humid} pressure={pressure} />
    //       <p className="card-text" style={{ marginTop: "40px" }}><small>{day()}</small></p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div
        className="container d-flex justify-content-center align-items-center flex-column"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        {/* Main heading */}
        <div className="heading" style={{ color: "White" ,marginTop: "70px",textAlign: "center",}}>
          <h5 className="card-title">
            <strong>ForWeather</strong>
          </h5>
        </div>

        {/* Searchbar */}
        <div style={{ width: "90%" }}>
          <Searchbar setResult={setResult} setClicked={setClicked} />
        </div>

        {/* Temperature and description card */}
        <div
          className="card d-flex justify-content-around align-items-center flex-row flex-wrap"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(5px)",
            color: "white",
            fontSize: "2rem", // Adjusted for better responsiveness
            margin: "5% 0",
            height: "auto", // Allows dynamic height
            minHeight: "150px", // Ensures it doesn’t get too small
            width: "90%",
            borderRadius: "20px",
            boxShadow: "0px 0px 30px white",
            padding: "10px", // Added padding for better spacing
          }}
        >
          {temperature && (
            <p className="card-text">
              {temperature} °C
              {/* <i className="bi bi-thermometer"></i> */}
            </p>
          )}
          <div className="d-flex justify-content-around align-items-center">
            {icon && <img src={icon} alt="icon" style={{ height: "15vh" }}/>} 
             <p className="card-text info" style={{ marginLeft: "10px" }}>
              {about}
            </p>
          </div>
        </div>

        {/* Weather properties */}
        <div style={{ width: "80%" }}>
          <Properties air={air} uv={uv} humid={humid} pressure={pressure} />
        </div>

        {/* Date */}
        <div style={{ color: "white" }}>
          <p className="card-text" style={{ marginTop: "40px" }}>
            <small>{day()}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

