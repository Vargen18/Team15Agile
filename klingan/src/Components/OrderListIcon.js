import React, { Component } from "react";

class OrderListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { order: props.order }; //Should not be name
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
