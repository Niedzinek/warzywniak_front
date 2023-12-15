import { useRef, useState } from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Row, Col, Form, Button } from "react-bootstrap";

function OfertaCard(props){
  const [ilosc, setIlosc] = useState();
    return(
        <Card>
            <CardBody>
            {/* <CardImg/> */}
            <CardTitle>{props.produkt.nazwa}</CardTitle>
            <Col>
            <CardText>{props.produkt.kolor}</CardText>
            <CardText>{props.produkt.cena}</CardText>
            <Form onSubmit={(e) => {
              e.preventDefault();
              props.onSubmit(props.produkt, ilosc)}}>
            <Form.Group controlId="quantity">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control
              type="number" 
              onChange={(z) => setIlosc(z.target.value)}
              />
            <Button type="submit">dodaj do koszyka</Button>
          </Form.Group>
              </Form>
            </Col>

            </CardBody>
        </Card>
    )
}
export default OfertaCard