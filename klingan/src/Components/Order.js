import React, { Component } from "react";
import CustomerInformation from "./CustomerInformation";
import OrderProductList from "./OrderProductList";
import * as db from "../database/Database";
import Comment from "./Comment";

// A class that holds the CustomerInformation aswell as a ProductList for a specific Order.
// To be displayed for the store when they plan to finish or just check on the order.
// Customer information displayed first followed by the list of products as specified by the mockups.
// Param: ProductList, CustomerInformation.
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: db.getOrder(parseInt(props.match.params.id)).order.products,
      customer: db.getOrder(parseInt(props.match.params.id)).order.customer,
      comment: db.getOrder(parseInt(props.match.params.id)).order.comment,
    };
  }

  render() {
    return (
      <div>
        <CustomerInformation customer={this.state.customer} />
        <Comment comment={this.state.comment}></Comment>
        <OrderProductList products={this.state.productList} />
      </div>
    );
  }
}

export default Order;
