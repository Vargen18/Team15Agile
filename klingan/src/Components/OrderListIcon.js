import React, { Component } from "react";

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
