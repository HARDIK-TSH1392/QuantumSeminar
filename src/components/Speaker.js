import React from 'react';

const Speaker = (props) => {
  return (
    <div className="container d-flex py-3">
      <div className="container" style={{ width: "200px" }}>
        <img src={props.image} alt="" style={{ width: "150px" }} />
        <div className="" style={{ fontWeight: 'bold' }}>
          <div className="container">{props.name}</div>
          <div className="container">{props.work}</div>
        </div>
      </div>
      <div className="container">
        <div className="container">
          <h3 align='justify' style={{ fontWeight: 'bold' }}>{props.title}</h3> {/* Add fontWeight style here */}
        </div>
        <div className="container">
          <p align='justify'>{props.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Speaker;
