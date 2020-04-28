import React, { Component } from "react";

// Class that holds the name of a product and can render that name, without any real formatting.
// Made to be used for the product list component.
// Param: name
class OrderListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { order: props.order }; //Should not be name
  }

  render() {
    return (
      <div>
        <span>{this.state.order.order.customer.name}: </span>
        <span>{this.state.order.order.products.length}</span>
      </div>
    );
  }
}

export default OrderListIcon;
