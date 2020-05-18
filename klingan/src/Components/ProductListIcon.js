import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Class that provides a card for a product containing the picture and name.
// Also buttons for increasing/decresing the number of products in the shopping cart.
// Uses the Button and Card bootstrap framworks.
// Made to be used for the product list component.
// Param: Product, name, url, units, addProd, removeProd
class ProductListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      productName: props.name,
      picture: props.url,
      units: props.units,
      kund: props.kund,
      section: props.section,
      addProd: props.addProd,
      removeProd: props.removeProd,
      sortRef: React.createRef(),
    };

    this.increaseClick = this.increaseClick.bind(this);
    this.decreaseClick = this.decreaseClick.bind(this);
  }

  increaseClick() {
    this.state.addProd({
      name: this.state.product.name,
      url: this.state.product.url,
      units: 1,
      section: this.state.section,
      comment: this.state.sortRef.current.value,
    });
    this.state.sortRef.current.value = "";
  }

  decreaseClick() {
    this.state.removeProd(this.state.product);
  }

  render() {
    return (
      <div class="card" style={{ width: "13rem" }}>
        <img
          class="card-img-top"
          src={this.state.picture}
          alt="Card image cap"
          height="200px"
        />
        <Form>
          <Form.Group as={Row} controlId="formHorizontalNamn">
            <Col sm={10}>
              <Form.Control
                type="sort"
                placeholder="Sort, vikt, önskemål"
                ref={this.state.sortRef}
              />
            </Col>
          </Form.Group>
        </Form>
        <div class="card-body">
          <h5 class="card-title">{this.state.productName}</h5>
          <button
            type="button"
            class="btn btn-success btn-lg"
            onClick={this.increaseClick}
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-danger btn-lg"
            onClick={this.decreaseClick}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default ProductListIcon;
