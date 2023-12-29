import { Col, Row } from "react-bootstrap";
import OfertaCard from "../components/OfertaCard";
import { useState } from "react";
import { useSelector } from "react-redux";

function Oferta(props){

    const cart = useSelector(state => state.cart)

    const oferty = [
        {
            id: 1,
            nazwa: "irga",
            kolor: "bialy",
            cena: 45
        },
        {
            id: 2,
            nazwa: "irys",
            kolor: "bialy",
            cena: "50"
        },
        {
            id: 3,
            nazwa: "jurek",
            kolor: "kremowy",
            cena: 45
        },
        {
            id: 4,
            nazwa: "tajfun",
            kolor: "zolty",
            cena: 45
        }
    ]
    

    function onOfertaItemClicked(produkt, ilosc){
        console.log(ilosc)
        console.log(produkt)
    }

    const [wybrane, setWybrane] = useState();

    return(
        <Row>
            {oferty &&
            oferty.map((oferta)=>{
                return(
                    <Col sm = "4">
                    <OfertaCard
                    key = {oferta.id}
                    produkt = {oferta}
                    onSubmit = {onOfertaItemClicked}
                    />
                    </Col>
                )
            })
            }
        </Row>
    )
}
export default Oferta;