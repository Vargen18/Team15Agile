import React, { Component } from "react";
import ProductListIcon from "./ProductListIcon";
import "../productList.css";

// A class that is used to display clickable products in a list, to be used for the main browse window.
// Param: list of products.
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: props.products };
  }

  render() {
    return (
      <div class="productList">
        {this.state.products.map((product) => (
          <ProductListIcon name={product.name} url={product.url} />
        ))}
      </div>
    );

    /*

    if (fullRows > 0) {

      return (
      )
    }
      } else {}
    */
    /*

    return (
      <div>
          <h3>Number of products: {nrProducts}</h3>
          <h3>Full rows: {fullRows}</h3>
          <h3>Last row: {lastRow}</h3>

      if (fullRows > 0) {
            <div class="container">{
              this.state.products.slice(0, 3).map((product) => (
                <ProductListIcon name={product.name} url={product.url} />
              ))}
            </div>
          } else {
            <h3>Nothing</h3>
          }
        </div>
    );
  }
  */
  }
}

export default ProductList;
