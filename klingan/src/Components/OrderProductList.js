import React, { Component } from "react";
import OrderProductListIcon from "./OrderProductListIcon";
import "../orderProductList.css";

// A class that holds a list of products, to be used in the Order component.
// The products are displayed after one another with breaks in between.
// Param: list of products.
class OrderProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: props.products };
  }

  render() {
    return (
      <div className="orderProductList">
        {this.state.products.map((product) => (
          <OrderProductListIcon name={product.name} />
        ))}
      </div>
    );
  }
}

export default OrderProductList;
