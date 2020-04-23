import React from "react";

function CustomerInfromation(props) {
  return (
    <div>
      <span>Kundens namn: {props.name}</span>
      <br />
      <span>Mailadress: {props.mail}</span>
      <br />
      <span>Telefonnummer: {props.telefon}</span>
      <br />
    </div>
  );
}

export default CustomerInfromation;
