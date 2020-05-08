import React, { Component } from "react";
import OrderListIcon from "./OrderListIcon";

// A class that holds all orders sent in by customers.
// To be displayed for the store when they review all customers orders.
// Each order displayed contains customer name and number of items
// Param: Order
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
            <a href={`/handlare/order/${order.id}`}>
              <OrderListIcon order={order} />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default OrderList;
