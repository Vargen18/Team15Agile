import React, { Component } from "react";
import ProductList from "./ProductList";

// A class that holds the CustomerInformation aswell as a ProductList for a specifik Order.
// To be displayed for the store when they plan to finish the order.
// Customer information displayed first followed by the list of products as specified by the mockups.
// Param: ProductList, CustomerInformation.
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.productList,
      kund: props.kund
    };
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <ProductList products={this.state.productList} kund={this.state.kund} />
      </div>
    );
  }
}

export default Order;
