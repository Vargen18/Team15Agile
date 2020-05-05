import React, { Component } from "react";

//Class that holds information that is displayed on order items
//Params order

class OrderListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { order: props.order };
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
