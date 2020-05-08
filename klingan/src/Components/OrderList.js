import React, { Component } from "react";
import OrderListIcon from "./OrderListIcon";
import "../orderList.css";
import ListGroup from "react-bootstrap/ListGroup";

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
