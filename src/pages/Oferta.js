import { Col, Row } from "react-bootstrap";
import OfertaCard from "../components/OfertaCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../services/useFetch";
import Koszyk from "./Koszyk";

function Oferta(props){

    const cart = useSelector(state => state.cart)

    const {data1, error, loading, fetchData} = useFetch('http://localhost:8080/products');
    
    const data = [{
        id: "1",
        price: "66",
        description : "opis",
        name: "nazwa"
    },
    {
        id: "1",
        price: "66",
        description : "opis",
        name: "nazwa"
    },
    {
        id: "1",
        price: "66",
        description : "opis",
        name: "nazwa"
    },
    {
        id: "1",
        price: "66",
        description : "opis",
        name: "nazwa"
    },
    {
        id: "1",
        price: "66",
        description : "opis",
        name: "nazwa"
    }]

    function onOfertaItemClicked(produkt, ilosc){
        console.log(ilosc)
        console.log(produkt)
    }
    useEffect(() => {
        fetchData();
    },[]);

    if(loading) return <div>loading...</div>
    if(error) return <div>Error: {error.message}</div>

    return(
        <Row>
<Col sm="9">
        
        <Row>
            {data &&
            data.map((oferta)=>{
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
        </Col>
        <Col sm="3">
            <Koszyk/>
        </Col>
        </Row>
    )
}
export default Oferta;