import React, { Component } from "react";
import "../orderListIcon.css";

class OrderListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { order: props.order }; //Should not be name
  }

  render() {
    return (
      <a
        className="orderListIcon"
        href={`/handlare/order/${this.state.order.id}`}
      >
        <span>{this.state.order.order.customer.name}: </span>
        <span>{this.state.order.order.products.length} produkter</span>
      </a>
    );
  }
}

export default OrderListIcon;
