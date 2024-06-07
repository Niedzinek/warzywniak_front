import { useRef, useState } from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/CartSlice";

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
            <CardTitle>{props.produkt.name}</CardTitle>
            <Col>
            <CardText>{props.produkt.description}</CardText>
            <CardText>{props.produkt.price}</CardText>
            <CardText>{props.produkt.ilosc}</CardText>
            <Button onClick={handleRemoveFromCart}>usun z koszyka</Button>
            </Col>

            </CardBody>
        </Card>
    )
}
export default KoszykCard