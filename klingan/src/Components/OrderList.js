import React, { Component } from "react";
import OrderListIcon from "./OrderListIcon";

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
