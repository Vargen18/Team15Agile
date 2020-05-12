import React, { Component } from "react";
import OrderProductListIcon from "./OrderProductListIcon";
import * as sorter from "../OrderProductSorter";
import "../Handlare.css";
import ListGroup from "react-bootstrap/ListGroup";
import * as db from "../database/Database";

// A class that holds a list of products, to be used in the Order component.
// The products are sorted and displayed per section.
// Param: list of products.
class OrderProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: props.products };
  }

  render() {
    let sorted = sorter.sortOrder(this.state.products);
    let temp = [];
    for (let section of db.getSections()) {
      let list = [];
      for (let product of sorted) {
        if (section === product.section) {
          list.push(
            <ListGroup.Item>
              <OrderProductListIcon name={product.name} />
            </ListGroup.Item>
          );
        }
      }
      if (list.length !== 0) {
        temp.push(<h3>{section}</h3>);
        temp.push(<ListGroup>{list}</ListGroup>);
      }
    }

    return <div className="Handlare">{temp}</div>;
  }
}

export default OrderProductList;
