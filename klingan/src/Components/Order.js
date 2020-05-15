import React, { Component } from "react";
import CustomerInformation from "./CustomerInformation";
import OrderProductList from "./OrderProductList";
import * as db from "../database/Database";
import Comment from "./Comment";

// A class that holds the CustomerInformation aswell as a ProductList for a specific Order.
// To be displayed for the store when they plan to finish or just check on the order.
// Customer information displayed first followed by comment followed by the list of products as specified by the mockups.
// Param: id, ProductList, customer, comment.
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      productList: db.getOrder(parseInt(props.match.params.id)).props
        .productList,
      customer: db.getOrder(parseInt(props.match.params.id)).props.customer,
      comment: db.getOrder(parseInt(props.match.params.id)).props.comment
    };
  }

  render() {
    console.log(this.state.productList);
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
