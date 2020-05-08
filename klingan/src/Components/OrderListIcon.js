import React, { Component } from "react";

//Class that holds information that is displayed on order items in the order list.
//Params order
class OrderListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { order: props.order };
  }

  render() {
    return (
      <React.Fragment>
        <span>
          {this.state.order.order.customer.name}:{" "}
          {this.state.order.order.products.length} produkter
        </span>
      </React.Fragment>
    );
  }
}

export default OrderListIcon;
