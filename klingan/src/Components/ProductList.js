import React, { Component } from "react";
import ProductListIcon from "./ProductListIcon";
import "../productList.css";

// A class that is used to display clickable products in a list, to be used for the main browse window.
// Param: list of products.
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      kund: props.kund,
      addProd: props.addProd,
      removeProd: props.removeProd
    };
  }

  render() {
    return (
      <div class="productList">
        {this.state.products.map(product => (
          <ProductListIcon
            product={product}
            name={product.name}
            url={product.url}
            units={product.units}
            addProd={this.state.addProd}
            removeProd={this.state.removeProd}
          />
        ))}
      </div>
    );
  }
}
export default ProductList;
