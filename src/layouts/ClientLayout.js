import { Button, Col, Container, Row } from "react-bootstrap";
import Koszyk from "../pages/Koszyk";
import Oferta from "../pages/Oferta";
import { useState } from "react";
import { Link } from "react-router-dom";

function ClientLayout(){
    
    

   
    const handleClick = () =>{
        // console.log(cartItems)
    }
    
    return(

        
            <Row>
                <Col sm={9}>
                    <Oferta 
                        // oferty = {oferty}
                        // onOfertaItemClicked = {handleAddToCart}
                    />
                    <Button 
                        // onClick={handleClick}
                    >xxx</Button>
                </Col>
                <Col sm ={3}>
                    <Koszyk
                        // cartItems = {cartItems}
                    />
                    <Link 
                        to={"/podsumowanie"}
                        // cartItems = {cartItems}
                    >Przejdz do podsumowania</Link>
                </Col>
            </Row>




        
        

    )
}
export default ClientLayout;