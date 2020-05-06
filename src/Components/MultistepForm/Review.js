import React from "react";

const Review = ({ setForm, formData, navigation }) => {
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email,
  } = formData;
  const { go } = navigation;

  return (
    <div className="row">
      <h3 id="logo">Review </h3>

      <div class="card">
        <div class="card-header">
          <h3 style={{ marginTop: "-16px" }}>NAME</h3>
        </div>
        <div class="card-body">
          <p> First name: {`${firstName}`},</p>
          <p>Last Name: {`${lastName}`}</p>
          <p>Nick Name: {`${nickName}`}</p>
          <button className="buttonStyle"  onClick={() => go("names")}>
            {" "}
            EDIT{" "}
          </button>
        </div>
      </div>

      

      <div class="card">
        <div class="card-header">
          <h3 style={{ marginTop: "-16px" }}>Address</h3>
        </div>
        <div class="card-body">
          <p> Address: {`${address}`}</p>
          <p>City: {` ${city}`} </p>
          <p>State: {`${state}`}</p>
          <p>ZIP: {`${zip}`} </p>
          <button className="buttonStyle"  onClick={() => go("names")}>
            {" "}
            EDIT{" "}
          </button>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 style={{ marginTop: "-16px" }}>Contact</h3>
        </div>
        <div class="card-body">
          <p>  Phone: {`${phone}`}</p>
          <p> E-mail: {`${email}`} </p>
          <button className="buttonStyle"  onClick={() => go("contact")}>
            {" "}
            EDIT{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
