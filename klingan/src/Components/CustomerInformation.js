import React, { Component } from "react";

class CustomerInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: props.customer,
    };
  }

  render() {
    return (
      <div>
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
