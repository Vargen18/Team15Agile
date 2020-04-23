import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: props.name };
  }

  render() {
    return (
      <div>
        <span>You thought it was {this.state.product}, but it was I DIO</span>
      </div>
    );
  }
}

export default Product;
