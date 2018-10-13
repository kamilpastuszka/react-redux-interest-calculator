import React from "react";

export const Result = props => {
  return (
    <div className="card">
      <div className="card-body">
        <span>{props.paymentType}:</span> <h2>{props.paymentAmount} </h2>
      </div>
    </div>
  );
};
