import React from "react";
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

function Kassa() {
  return (
    <div className="Kassa">
      <h1>Kassa</h1>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalNamn">
          <Form.Label column sm={2}>
            Namn:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="namn" placeholder="Namn" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalMailadress">
          <Form.Label column sm={2}>
            Mailadress:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="mailadress" placeholder="Mailadress" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalTelefon">
          <Form.Label column sm={2}>
            Telefon:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="telefon" placeholder="Telefon" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalÖnskemål">
          <Form.Label column sm={2}>
          Övriga önskemål:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="kommentar" placeholder="T ex: Ekologisk, glutenfritt" />
          </Col>
        </Form.Group>

        {ShowCart()}
        
        <Form.Group as={Row}>
          <Col sm={{ span: 8, offset: 2 }}>
            <Button type="submit">Skicka Beställning</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

function ShowCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) {
    return null;
  } else {
    return (
      <div>
        <h3>Din beställning:</h3>
        {cart.map((cart) => (
          <li>
            <div>
              {cart.name}, {cart.units}
            </div>
          </li>
        ))}
      </div>
    );
  }
}

export default Kassa;
