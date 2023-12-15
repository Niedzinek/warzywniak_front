import { Col, Row } from "react-bootstrap";
import OfertaCard from "../components/OfertaCard";
import { useState } from "react";

function Oferta(props){
    

    function onOfertaItemClicked(produkt, ilosc){
        console.log(ilosc)
        console.log(produkt)
    }

    const [wybrane, setWybrane] = useState();

    return(
        <Row>
            {props.oferty &&
            props.oferty.map((oferta)=>{
                return(
                    <Col sm = "4">
                    <OfertaCard
                    key = {oferta.id}
                    produkt = {oferta}
                    onSubmit = {props.onOfertaItemClicked}
                    />
                    </Col>
                )
            })
            }
        </Row>
    )
}
export default Oferta;