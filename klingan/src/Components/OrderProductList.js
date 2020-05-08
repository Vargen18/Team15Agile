import React, { Component } from "react";
import OrderProductListIcon from "./OrderProductListIcon";
import ListGroup from "react-bootstrap/ListGroup";
import "../Handlare.css";

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
      <div className="Handlare">
        <ListGroup>
          {this.state.products.map((product) => (
            <ListGroup.Item>{product.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default OrderProductList;
