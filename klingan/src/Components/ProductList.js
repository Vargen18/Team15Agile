import React, { Component } from "react";
import ProductListIcon from "./ProductListIcon";

// A class that holds a list of products, to be used in the Order component.
// The products are displayed after one another with breaks in between.
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
    const nrProducts = this.state.products.length;
    const fullRows = Math.floor(nrProducts / 3);
    const lastRow = nrProducts % 3;
    const disp = [];

    var k = 0;
    for (var i = 0; i < fullRows; i++) {
      disp.push(
        <div class="container">
          {this.state.products.slice(k, k + 3).map(product => (
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
      k = k + 3;
    }

    if (lastRow != 0) {
      disp.push(
        <div class="container">
          {this.state.products.slice(k, k + 3).map(product => (
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

    return <h1>{disp}</h1>;

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
