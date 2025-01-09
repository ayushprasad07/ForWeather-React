import React from 'react';
// import pressure from './resilience.png'
import air from './air.png';
import uv from './uv-index.png';
import wind from './wind.png';
import pressure from './pressure-Photoroom.png';

export default function Properties(props) {
  // const cardStyle = {
  //   backdropFilter: "blur(20px)",
  //   backgroundColor: "rgba(255, 255, 255, 0)",
  //   boxShadow: "0px 0px 10px white",
  //   color: "white",
  //   borderRadius: "20px",
  //   margin:"10px"
  // };

  const cardStyle = {
    width: "100%",
    height: "90%",
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(255, 255, 255, 0)", // Adjusted opacity for better visibility
    color: "white",
    boxShadow: "0px 0px 10px white",
    flexWrap: "wrap",
    borderRadius:"20px"
  };

  const cardStyle1 = {
    width: "50%",
    height: "50%",
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(255, 255, 255, 0)", // Adjusted opacity for better visibility
    color: "white",
    // boxShadow: "0px 0px 10px white",
  };

  const imageStyle = {
    height: "10vh",
    width: "10vh",
    maxHeight: "90%",
    maxWidth: "90%",
  };

  return (
    // <div className="container">
    //   <div className="row">
    //     {/* Wind Card */}
    //     <div className="col-md-3 d-flex justify-content-center">
    //       <div className="card" style={cardStyle}>
    //         <div className="card-body d-flex justify-content-around align-items-center flex-column" >
    //           <h5 className="card-title">Wind</h5>
    //           <img src={wind} alt="weather" style={{ height: "50%", width: "50%" }} />
    //           <h6 className="card-subtitle mb-2">{props.air}</h6>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Humidity Card */}
    //     <div className="col-md-3 d-flex justify-content-center">
    //       <div className="card" style={cardStyle}>
    //         <div className="card-body d-flex justify-content-around align-items-center flex-column" >
    //           <h5 className="card-title">Humidity</h5>
    //           <img src={air} alt="weather" style={{ height: "50%", width: "50%" }} />
    //           <h6 className="card-subtitle mb-2">{props.humid}</h6>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Pressure Card */}
    //     <div className="col-md-3 d-flex justify-content-center">
    //       <div className="card" style={cardStyle}>
    //         <div className="card-body d-flex justify-content-around align-items-center flex-column" >
    //           <h5 className="card-title">Pressure</h5>
    //           <img src={pressure} alt="weather" style={{ height: "50%", width: "50%" }} />
    //           <h6 className="card-subtitle mb-2">{props.pressure}</h6>
    //         </div>
    //       </div>
    //     </div>

    //     {/* UV Index Card */}
    //     <div className="col-md-3 d-flex justify-content-center">
    //       <div className="card" style={cardStyle}>
    //         <div className="card-body d-flex justify-content-around align-items-center flex-column">
    //           <h5 className="card-title">UV-index</h5>
    //           <img src={uv} alt="weather" style={{ height: "50%", width: "50%" }} />
    //           <h6 className="card-subtitle mb-2">{props.uv}</h6>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container" style={cardStyle}>
      <div className="d-flex justify-content-around align-items-center flex-wrap">
        {/* Wind Card */}
        <div className="card" style={cardStyle1}>
          <div className="card-body d-flex justify-content-around align-items-center flex-column">
            <h5 className="card-title">Wind</h5>
            <img src={wind} alt="weather" style={imageStyle} />
            <h6 className="card-subtitle mb-2">{props.air}</h6>
          </div>
        </div>

        {/* Humidity Card */}
        <div className="card" style={cardStyle1}>
          <div className="card-body d-flex justify-content-around align-items-center flex-column">
            <h5 className="card-title">Humidity</h5>
            <img src={air} alt="weather" style={imageStyle} />
            <h6 className="card-subtitle mb-2">{props.humid}</h6>
          </div>
        </div>

        {/* Pressure Card */}
        <div className="card" style={cardStyle1}>
          <div className="card-body d-flex justify-content-around align-items-center flex-column">
            <h5 className="card-title">Pressure</h5>
            <img src={pressure} alt="weather" style={imageStyle} />
            <h6 className="card-subtitle mb-2">{props.pressure}</h6>
          </div>
        </div>

        {/* UV Index Card */}
        <div className="card" style={cardStyle1}>
          <div className="card-body d-flex justify-content-around align-items-center flex-column">
            <h5 className="card-title">UV-index</h5>
            <img src={uv} alt="weather" style={imageStyle} />
            <h6 className="card-subtitle mb-2">{props.uv}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
