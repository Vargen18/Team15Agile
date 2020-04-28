import React, { Component } from "react";

// Class that holds the name of a product and can render that name, without any real formatting.
// Made to be used for the product list component.
// Param: name
class OrderListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { length: props.length }; //Should not be name
  }

  render() {
    return (
      <div>
        <span>{this.state.length}</span>
      </div>
    );
  }
}

export default OrderListIcon;
