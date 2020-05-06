import React from "react";

const states = [
  ["ND", "New Delhi"],
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
