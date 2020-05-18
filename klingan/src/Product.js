import React from "react";
import "./App.css";
import "./Handlare.css";
import "./Product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      addProd: props.addProd,
      removeProd: props.removeProd,
      comment: props.comment,
      checked: props.checked,
      replacementProduct: props.checked
        ? "Ersättningsvara tillåts"
        : "Ersättningsvara tillåts ej",
    };

    this.increaseClick = this.increaseClick.bind(this);
    this.decreaseClick = this.decreaseClick.bind(this);

    const replacementProduct = props.checked
      ? "Ersättningsvara tillåts"
      : "Ersättningsvara tillåts ej";
  }

  increaseClick() {
    this.state.addProd({
      name: this.props.name,
      url: this.props.url,
      units: 1,
      section: this.props.section,
      comment: this.state.comment,
    });
  }

  decreaseClick() {
    this.state.removeProd(this.state.product);
  }

  render() {
    console.log(this.state.checked);
    return (
      <div class="card mb-3" style={{ width: "13rem" }}>
        <img
          class="card-img-top"
          src={this.props.url}
          alt="Card image cap"
          height="200px"
        />
        <div class="card-body">
          <h5 class="card-title">{this.props.name}</h5>
          <h5 class="card-title">{this.props.comment}</h5>
          <h5 class="card-title">{this.props.units}</h5>
          <h5 class="card-title">{this.state.replacementProduct}</h5>
          <button
            type="button"
            class="btn btn-danger btn-lg"
            onClick={this.decreaseClick}
          >
            -
          </button>
          <button
            type="button"
            class="btn btn-success btn-lg"
            onClick={this.increaseClick}
            height="200px"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Product;

// onClick={this.decreaseClick}

/*

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
    });
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
                placeholder="Specifik sort"
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

*/
