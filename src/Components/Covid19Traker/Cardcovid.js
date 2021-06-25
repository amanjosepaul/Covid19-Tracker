import React from "react";

const Cardcovid = (props) => {
  return (
    <>
      <div className="col-sm-4 mt-2">
        <div className="card" style={{ width: "18rem;" }}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.details}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcovid;
