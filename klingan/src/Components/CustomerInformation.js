import React from "react";

function CustomerInfromation(props) {
  return (
    <div>
      <span>Kundens namn: {props.name}</span>
      <span>Mailadress: {props.mail}</span>
      <span>Telefonnummer: {props.telefon}</span>
    </div>
  );
}

export default CustomerInfromation;
