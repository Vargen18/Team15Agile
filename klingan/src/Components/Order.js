import React, { Component } from "react";
import CustomerInformation from "./CustomerInformation";
import ProductList from "./ProductList";
import * as db from "../database/Database";
import Handlare from "../Handlare";

// A class that holds the CustomerInformation aswell as a ProductList for a specifik Order.
// To be displayed for the store when they plan to finish the order.
// Customer information displayed first followed by the list of products as specified by the mockups.
// Param: ProductList, CustomerInformation.
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: db.getOrder(parseInt(props.match.params.id)).order.products,
      customer: db.getOrder(parseInt(props.match.params.id)).order.customer,
    };
  }

  render() {
    return (
      <div>
        <a href="/handlare">Tillbaka till alla Inköpslistor</a>
        <CustomerInformation customer={this.state.customer} />
        <ProductList products={this.state.productList} />
      </div>
    );
  }
}

function redirectToOrders() {
  ReactDOM.render(<Handlare />, document.getElementById("root"));
}

export default Order;
