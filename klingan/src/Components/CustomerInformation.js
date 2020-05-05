import React, { Component } from "react";
import "../customerInformation.css";

// A class that holds the name, mail and phone number of a customer. It renders this information in a list with breaks in between.
// Made to be used for the Order component.
// Param: name, mail, telefon
class CustomerInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: props.customer,
    };
  }

  render() {
    return (
      <div className="customerInformation">
        <span>Kundens namn: {this.state.customer.name}</span>
        <br />
        <span>Mailadress: {this.state.customer.mail}</span>
        <br />
        <span>Telefonnummer: {this.state.customer.telefon}</span>
        <br />
      </div>
    );
  }
}

export default CustomerInformation;
