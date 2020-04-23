import React, { Component } from "react";
import Product from "./Product";

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
            <Product name={product.name} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductList;
