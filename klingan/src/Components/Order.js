import React, { Component } from "react";
import CustomerInformation from "./CustomerInformation";
import OrderProductList from "./OrderProductList";
import ReactDOM from "react-dom";
import Handlare from "../Handlare";

// A class that holds the CustomerInformation aswell as a ProductList for a specifik Order.
// To be displayed for the store when they plan to finish the order.
// Customer information displayed first followed by the list of products as specified by the mockups.
// Param: ProductList, CustomerInformation.
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.productList,
      customer: props.customer,
    };
  }

  render() {
    return (
      <div>
        <button onClick={redirectToOrders}>Gå tillbaka till ordrar</button>
        <CustomerInformation customer={this.state.customer} />
        <OrderProductList products={this.state.productList} />
      </div>
    );
  }
}

function redirectToOrders() {
  ReactDOM.render(<Handlare />, document.getElementById("root"));
}

export default Order;
