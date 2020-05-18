import React, { Component } from "react";
import OrderProductListIcon from "./OrderProductListIcon";
import * as sorter from "../OrderProductSorter";
import "../Handlare.css";
import ListGroup from "react-bootstrap/ListGroup";
import * as db from "../database/Database";

// A class that holds a list of products, to be used in the Order component.
// The products are sorted and displayed per productGroup.
// Param: list of products.
class OrderProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: props.products };
    console.log(this.state.products);
  }

  render() {
    let sorted = sorter.sortOrder(this.state.products);
    let temp = [];
    console.log(sorted);
    console.log(this.state.products);
    for (let productGroup of db.getProductGroups()) {
      for (let product of sorted) {
        if (productGroup === product.name) {
          temp.push(
            <ListGroup.Item>
              <OrderProductListIcon product={product} />
            </ListGroup.Item>
          );
        }
      }
    }
    return (
      <div className="Handlare">
        <ListGroup>{temp}</ListGroup>
      </div>
    );
  }
}

export default OrderProductList;
