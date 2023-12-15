import {Row, Col, Button} from "react-bootstrap"
import KoszykCard from "../components/KoszykCard";
import { Link } from "react-router-dom";
function Koszyk(props){
    return(
        <Row>
            {props.cartItems &&
            props.cartItems.map((cartItem)=>{
                return(
                    <Col sm = "12">
                    <KoszykCard
                    key = {cartItem.id}
                    produkt = {cartItem}
                    // onSubmit = {props.onOfertaItemClicked}
                    />
                    
                    </Col>
                )
            })
            }
        </Row>
    )
}

export default Koszyk;