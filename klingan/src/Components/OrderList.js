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
    if (this.state.orders != null) {
      console.log("OrderList state orders: ");
      console.log(this);
      return (
        <ListGroup>
          {this.state.orders.props.orders.map(order => (
            <ListGroup.Item action href={`/handlare/order/${order.props.id}`}>
              <OrderListIcon order={order} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      );
    } else {
      return <p1>Det finns inga ordrar</p1>;
    }
  }
}

export default OrderList;
