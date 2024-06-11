import { Button, Col, Container, Row } from "react-bootstrap";
import Koszyk from "../pages/Koszyk";
import Oferta from "../pages/Oferta";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";

function ClientLayout(){
    
    

   
    const handleClick = () =>{
        // console.log(cartItems)
    }
    
    return(
<>
        <Row>
            <Menu/>
        </Row>
            <Row>
<Outlet/>

                {/* <Col sm={9}>
                    <Oferta 
                        // oferty = {oferty}
                        // onOfertaItemClicked = {handleAddToCart}
                    />
                    
                </Col>
                <Col sm ={3}>
                    <Koszyk
                        // cartItems = {cartItems}
                    />
                </Col> */}
            </Row>
    </>




        
        

    )
}
export default ClientLayout;