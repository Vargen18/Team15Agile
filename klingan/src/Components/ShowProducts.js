import React, { Component } from "react";
import ProductList from "./ProductList";

// A class that is displayed in the main browse window showing all products in the list using ProductList
// Param: list of products.
class ShowProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.productList,
      kund: props.kund,
      units: props.units,
      addProd: props.addProd,
      removeProd: props.removeProd
    };
  }

  render() {
    return (
      <div>
        <ProductList
          products={this.state.productList}
          kund={this.state.kund}
          addProd={this.state.addProd}
          removeProd={this.state.removeProd}
        />
      </div>
    );
  }
}

export default ShowProducts;
