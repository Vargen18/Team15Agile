import React, { Component } from "react";
import CustomerInfromation from "./CustomerInformation";
import ProductList from "./ProductList";

// A class that holds the CustomerInformation aswell as a ProductList for a specifik Order.
// To be displayed for the store when they plan to finish the order.
// Customer information displayed first followed by the list of products as specified by the mockups.
// Param: ProductList, CustomerInformation.
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
