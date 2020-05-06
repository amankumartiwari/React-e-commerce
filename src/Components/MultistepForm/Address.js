import React from "react";

import ItemForm from "./ItemForm";
import StateDrop from "./StateDrop";

const Address = ({ setForm, formData, navigation }) => {
  const { address, city, state, zip } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3 id="logo"> Address</h3>
      <ItemForm
        label="First Address"
        name="address"
        value={address}
        onChange={setForm}
      />
      <ItemForm label="City" name="city" value={city} onChange={setForm} />
      <StateDrop label="State" name="state" value={state} onChange={setForm} />
      <ItemForm label="Zip" name="zip" value={zip} onChange={setForm} />
      <div>
        <button
          style={{ marginRight: "20px" }}
          className="buttonStyle"
          onClick={previous}
        >
          Previous
        </button>
        <button className="buttonStyle" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Address;
