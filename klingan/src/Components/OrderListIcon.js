import React, { Component } from "react";
import ReactDOM from "react-dom";
import Order from "./Order";

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
