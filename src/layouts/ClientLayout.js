import { Button, Col, Container, Row } from "react-bootstrap";
import Koszyk from "../pages/Koszyk";
import Oferta from "../pages/Oferta";
import { useState } from "react";
import { Link } from "react-router-dom";

function ClientLayout(){
    
    const oferty = [
        {
            id: 1,
            nazwa: "irga",
            kolor: "bialy",
            cena: "45"
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
            cena: "45"
        },
        {
            id: 4,
            nazwa: "tajfun",
            kolor: "zolty",
            cena: "45"
        }
    ]

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (newItem, ilosc) => {
        console.log("kliknieto dodaj do koszyka")
        setCartItems([...cartItems, {newItem, ilosc}]);
        // console.log(cartItems)
    }
    const handleClick = () =>{
        console.log(cartItems)
    }
    
    return(

        
            <Row>
                <Col sm={9}>
                    <Oferta 
                        oferty = {oferty}
                        onOfertaItemClicked = {handleAddToCart}
                    />
                    <Button 
                        onClick={handleClick}
                    >xxx</Button>
                </Col>
                <Col sm ={3}>
                    <Koszyk
                        cartItems = {cartItems}
                    />
                    <Link 
                        to={"/podsumowanie"}
                        cartItems = {cartItems}
                    >Przejdz do podsumowania</Link>
                </Col>
            </Row>




        
        

    )
}
export default ClientLayout;