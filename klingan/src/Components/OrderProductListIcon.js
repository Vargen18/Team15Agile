import React, { Component } from "react";
import "../orderProductListIcon.css";

// Class that holds the name of a product and can render that name, without any real formatting.
// Made to be used for the product list component.
// Param: name
class OrderProductListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { product: props.name };
  }

  render() {
    return (
      <div className="orderProductListIcon">
        <span>{this.state.product}</span>
      </div>
    );
  }
}

export default OrderProductListIcon;
