import React, { Component } from "react";
import CustomerInfromation from "./CustomerInformation";
import ProductList from "./ProductList";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.productList,
      customer: props.customer,
    };
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <CustomerInfromation customer={this.state.customer} />
        <ProductList products={this.state.productList} />
      </div>
    );
  }
}

export default Order;
