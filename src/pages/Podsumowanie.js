import { useSelector } from "react-redux"
import KoszykCard from "../components/KoszykCard"
import {Row, Col, Button} from "react-bootstrap"



function Podsumowanie(){
    const checkout = useSelector((state) => state.cart)
    return(

        <Row>
            {checkout?.list && checkout?.list.length > 0 ?(
                checkout.list.map((checkoutItem) => {
                    return(
                        <Col>
                            <KoszykCard 
                            key = {checkoutItem.id}
                            produkt = {checkoutItem}    
                            />
                        </Col>
                    )
                })
            ):null}
        </Row>

    )
}

export default Podsumowanie