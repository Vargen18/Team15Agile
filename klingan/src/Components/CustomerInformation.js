import React, { Component } from "react";

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
