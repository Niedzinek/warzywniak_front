import {Row, Col, Button} from "react-bootstrap"
import KoszykCard from "../components/KoszykCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Koszyk(){

      const cart = useSelector((state) => state.cart)


    return(
        <Row>
            {cart?.list && cart?.list?.length > 0 ?(

                cart?.list.map((cartItem)=>{
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
            ) : null}
        </Row>
    )
}

export default Koszyk;