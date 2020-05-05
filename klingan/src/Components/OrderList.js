import React, { Component } from "react";
import OrderListIcon from "./OrderListIcon";
import "../orderList.css";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: props.orders };
  }

  render() {
    return (
      <div className="orderList">
        {this.state.orders.map((order) => (
          <OrderListIcon order={order} />
        ))}
      </div>
    );
  }
}

export default OrderList;
