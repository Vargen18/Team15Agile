import React, { Component } from "react";
import "./App.css";
import "./Handlare.css";
import * as db from "./database/Database";
import OrderList from "./Components/OrderList";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./Kassa.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Order from "./Components/Order";

//TODO import ShowCart någonstns ifrån, behöver inte vara här

//A Component that lets you input your information via forms and confirm your order.
class Kassa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //These references are needed in order to get the values from the forms.
      nameRef: React.createRef(),
      mailRef: React.createRef(),
      phoneRef: React.createRef(),
      commentRef: React.createRef()
    };
  }

  render() {
    return (
      <div className="Kassa">
        <h1>Kassa</h1>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalNamn">
            <Form.Label column sm={2}>
              Namn:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="namn"
                placeholder="Namn"
                ref={this.state.nameRef}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalMailadress">
            <Form.Label column sm={2}>
              Mailadress:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="mailadress"
                placeholder="Mailadress"
                ref={this.state.mailRef}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalTelefon">
            <Form.Label column sm={2}>
              Telefon:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="telefon"
                placeholder="Telefon"
                ref={this.state.phoneRef}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalÖnskemål">
            <Form.Label column sm={2}>
              Övriga önskemål:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="kommentar"
                placeholder="T ex: Ekologisk, glutenfritt"
                ref={this.state.commentRef}
              />
            </Col>
          </Form.Group>

          {ShowCart()}

          <Form.Group as={Row}>
            <Col sm={{ span: 8, offset: 2 }}>
              <a href="/kund/bekraftelse">
                <Button onClick={() => this.updateOrderList()}>
                  Skicka Beställning
                </Button>
              </a>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }

  // Hämtar varukorgen och all ifylld info och skapar en ny order med unikt id efter senaste ordern
  CreateOrder() {
    const orderList = JSON.parse(localStorage.getItem("orderList"));
    var maxId;
    if (orderList != null) {
      maxId =
        orderList.props.orders[orderList.props.orders.length - 1].props.id;
    } else maxId = -1;
    return (
      <Order
        productList={JSON.parse(localStorage.getItem("cart"))}
        customer={{
          name: this.state.nameRef.current.value,
          mail: this.state.mailRef.current.value,
          telefon: this.state.phoneRef.current.value
        }}
        comment={this.state.commentRef.current.value}
        id={maxId + 1}
      ></Order>
    );
  }

  // Hämtar orderlisten om det finns någon, annars skapar en ny tom
  getOrderList() {
    const orderList = db.getOrders();
    if (orderList != null) return orderList;
    else return <OrderList orders={[]} />;
  }

  // Hämtar orderlisten, skapar kundens nya order och lägger till den in orderlisten
  updateOrderList() {
    const orderList = this.getOrderList();
    const order = this.CreateOrder();
    orderList.props.orders.push(order);
    localStorage.setItem("orderList", JSON.stringify(orderList));
  }
}

function ShowCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) {
    return null;
  } else {
    return (
      <div>
        <h3>Din beställning:</h3>
        {cart.map(cart => (
          <ul class="articles">
            <li>
              <div>
                {cart.name}, {cart.comment == "" ? "-" : cart.comment},{" "}
                {cart.units},{" "}
                {cart.checked
                  ? "Ersättningsvara tillåts"
                  : "Ersättningsvara tillåts ej"}
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Kassa;
