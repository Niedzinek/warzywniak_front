import { useRef, useState } from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { cartActions } from "../store/cartSlice"
import { addToCart, removeFromCart  } from "../store/CartSlice"

function OfertaCard(props){
  const [ilosc, setIlosc] = useState(1);

  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart)

  const addToCartHandler = () => {
    dispatch(addToCart({...props.produkt, ilosc}))
    // console.log(cart.list)
    // console.log(props)
    // dispatch(removeFromCart())
  }

    return(
        <Card>
            <CardBody>
            {/* <CardImg/> */}
            <CardTitle>{props.produkt.name}</CardTitle>
            <Col>
            <CardText>{props.produkt.description}</CardText>
            <CardText>{props.produkt.price}</CardText>
            <Form 
            onSubmit={(e) => {
              e.preventDefault();
              addToCartHandler();
            }}
            >
            <Form.Group controlId="quantity">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control
            min={parseInt(1)}
            defaultValue={parseInt(1)}
            required={true}
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