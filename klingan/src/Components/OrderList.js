import React, { Component } from "react";
import OrderListIcon from "./OrderListIcon";
import ListGroup from "react-bootstrap/ListGroup";

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
      <ListGroup>
        {this.state.orders.map((order) => (
          <ListGroup.Item action href={`/handlare/order/${order.id}`}>
            <OrderListIcon order={order} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default OrderList;
