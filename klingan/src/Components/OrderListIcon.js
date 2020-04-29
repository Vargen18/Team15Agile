import React, { Component } from "react";
import ReactDOM from "react-dom";
import Order from "./Order";

class OrderListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { order: props.order }; //Should not be name
  }

  render() {
    return (
      <div onClick={() => redirectToOrder(this.state.order)}>
        <span>{this.state.order.order.customer.name}: </span>
        <span>{this.state.order.order.products.length}</span>
      </div>
    );
  }
}

function redirectToOrder(order) {
  ReactDOM.render(
    <Order
      customer={order.order.customer}
      productList={order.order.products}
    />,
    document.getElementById("root")
  );
}

export default OrderListIcon;
