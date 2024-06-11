import {Row, Col, Button} from "react-bootstrap"
import KoszykCard from "../components/KoszykCard";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Koszyk(){

    let navigate = useNavigate();

      const cart = useSelector((state) => state.cart)

      const handlePrzejdzDoZamowienia = () => {
        navigate("/podsumowanie")
      }


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
            <Button onClick={handlePrzejdzDoZamowienia}>Przejdź do podsumowania</Button>
        </Row>
    )
}

export default Koszyk;