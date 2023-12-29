import { useRef, useState } from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slice";

function KoszykCard(props){
//   const [ilosc, setIlosc] = useState();
const dispatch = useDispatch();

const handleRemoveFromCart = () =>{
  dispatch(removeFromCart(props.produkt))
}
    return(
        <Card>
            <CardBody>
            {/* <CardImg/> */}
            <CardTitle>{props.produkt.nazwa}</CardTitle>
            <Col>
            <CardText>{props.produkt.kolor}</CardText>
            <CardText>{props.produkt.cena}</CardText>
            <CardText>{props.produkt.ilosc}</CardText>
            <Button onClick={handleRemoveFromCart}>usun z koszyka</Button>

            {/* <Form onSubmit={(e) => {
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
              </Form> */}
            </Col>

            </CardBody>
        </Card>
    )
}
export default KoszykCard