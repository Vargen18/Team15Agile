import React, { Component } from "react";
import OrderListIcon from "./OrderListIcon";

// A class that holds a list of products, to be used in the Order component.
// The products are displayed after one another with breaks in between.
// Param: list of products.
class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: props.orders };
  }

  render() {
    return (
      <ul>
        {this.state.orders.map((order) => (
          <li key={order.id}>
            <OrderListIcon length={order.products.length} />
          </li>
        ))}
      </ul>
    );
  }
}

export default OrderList;
