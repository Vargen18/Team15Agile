import React, { Component } from "react";

// Class that holds a product and can render the name of that product, as well as the amount.
// Made to be used for the product list component.
// Param: Product
class OrderProductListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { product: props.product };
  }

  render() {
    return (
      <div>
        <span>
          {this.state.product.name}, (
          {this.state.product.comment == "" ? "-" : this.state.product.comment})
          Mängd: {this.state.product.units},{" "}
          {this.state.product.checked
            ? "Ersättningsvara tillåts"
            : "Ersättningsvara tillåts ej"}
        </span>
      </div>
    );
  }
}

export default OrderProductListIcon;
