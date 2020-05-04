import React, { Component } from "react";
import OrderListIcon from "./OrderListIcon";
import ReactDOM from "react-dom";
import Order from "./Order";

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

// function redirectToOrder(order) {
//   console.log(order.id + " running");
//   ReactDOM.render(
//     <Order
//       customer={order.order.customer}
//       productList={order.order.products}
//     />,
//     document.getElementById("root")
//   );
// }

export default OrderList;
