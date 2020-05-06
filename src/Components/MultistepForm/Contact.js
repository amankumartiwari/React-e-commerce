import React from "react";

import ItemForm from "./ItemForm";

const Contact = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3 id ="logo">Contact </h3>
      <ItemForm label="Phone" name="phone" value={phone} onChange={setForm} />
      <ItemForm label="E-mail" name="email" value={email} onChange={setForm} />
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

export default Contact;
