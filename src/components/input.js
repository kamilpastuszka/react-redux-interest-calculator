import React from "react";

export const Input = props => (
  <div>
    <div className="row space-between">
      <div className="float-right">
        <div className="col"> {props.name} </div>
        <div className="col">
          <h3> {props.value}</h3>
        </div>
      </div>
    </div>

    <div className="row">
      <input
        className="range-input"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        defaultValue={props.value}
        name={props.name}
        onChange={props.changed}
      />
    </div>
  </div>
);
