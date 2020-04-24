import React, { Component } from "react";
import ProductListIcon from "./ProductListIcon";

// A class that holds a list of products, to be used in the Order component.
// The products are displayed after one another with breaks in between.
// Param: list of products.
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: props.products };
  }

  render() {
    return (
      <ul>
        {this.state.products.map((product) => (
          <li key={product.id}>
            <ProductListIcon name={product.name} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductList;
