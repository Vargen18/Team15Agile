import React, { Component } from "react";

//Class that holds information that is displayed on order items in the order list.
//Params order
class OrderListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { order: props.order };
  }

  render() {
    console.log("OrderlistIcon this:");
    console.log(this);
    return (
      <React.Fragment>
        <span>
          {this.state.order.props.customer.name}:{" "}
          {this.state.order.props.productList.length} produkter
        </span>
      </React.Fragment>
    );
  }
}

export default OrderListIcon;
