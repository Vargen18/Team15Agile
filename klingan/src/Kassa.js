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
import * as yup from "yup";
import { Formik } from "formik";
import InputGroup from "react-bootstrap/InputGroup";

const schema = yup.object({
  name: yup.string().required(),
  mailadress: yup.string(),
  telefon: yup.string(),
  kommentar: yup.string(),
});

class Kassa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameRef: React.createRef(),
      mailRef: React.createRef(),
      phoneRef: React.createRef(),
      commentRef: React.createRef(),
    };
  }

  render() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: "Test",
        }}
      >
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
                <Button
                  onClick={() =>
                    console.log(
                      this.state.nameRef.current.value,
                      this.state.phoneRef.current.value,
                      this.state.mailRef.current.value,
                      this.state.commentRef.current.value
                    )
                  }
                >
                  Skicka Beställning
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Formik>
    );
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

function readName(form) {
  console.log(form.elements.name);
}

export default Kassa;
