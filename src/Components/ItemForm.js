import React from "react";

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
  <div  >
    {type === "text" ? (
      <>
        <label >{label}</label>
        <input className={"inputStyle"} type={type} {...otherProps} />
      </>
    ) : (
      <>
        <label />
        <input className={"inputStyle"} type={type} {...otherProps} />
        {label}
      </>
    )}
  </div>
);

export default ItemForm;
