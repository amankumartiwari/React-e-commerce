import React from "react";

const states = [
  ["TN", "Tamil Nadu"],
  ["MH", "Maharastra"],
  ["WB", "West Bengal"]
];

const StateDrop = ({ label, ...others }) => (
  <>
    <label>{label}</label>
    <select {...others}>
      {states.map(([value, name]) => (
        <option value={value}>{name}</option>
      ))}
    </select>
  </>
);

export default StateDrop;
