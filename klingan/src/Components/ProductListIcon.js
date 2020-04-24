import React, { Component } from "react";

// Class that holds the name of a product and can render that name, without any real formatting.
// Made to be used for the product list component.
// Param: name
class ProductListIcon extends Component {
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

export default ProductListIcon;
