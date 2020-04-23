import React, { Component } from "react";
import CustomerInfromation from "./CustomerInformation";
import ProductList from "./ProductList";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.ProductList,
      customerInformation: props.CustomerInformation,
    };
  }

  render() {
    return (
      <div>
        <CustomerInfromation
          name={this.state.customerInformation.name}
          mail={this.state.customerInformation.mail}
          telefon={this.state.customerInformation.telefon}
        />
        <ProductList products={this.state.productList} />
      </div>
    );
  }
}

export default Order;
