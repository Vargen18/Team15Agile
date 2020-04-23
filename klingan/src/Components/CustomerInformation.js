import React, { Component } from "react";

// A class that holds the name, mail and phone number of a customer. It renders this information in a list with breaks in between.
// Made to be used for the Order component.
// Param: name, mail, telefon
class CustomerInformation extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name, mail: props.mail, telefon: props.telefon };
  }

  render() {
    return (
      <div>
        <span>Kundens namn: {this.state.name}</span>
        <br />
        <span>Mailadress: {this.state.mail}</span>
        <br />
        <span>Telefonnummer: {this.state.telefon}</span>
        <br />
      </div>
    );
  }
}

export default CustomerInformation;
