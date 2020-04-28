import React, { Component } from "react";
import OrderListIcon from "./OrderListIcon";
import ReactDOM from "react-dom";
import Order from "./Order";

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
            <OrderListIcon order={order} />
            {console.log(order.id)}
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
