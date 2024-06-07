import { Col, Row } from "react-bootstrap";
import OfertaCard from "../components/OfertaCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../services/useFetch";

function Oferta(props){

    const cart = useSelector(state => state.cart)

    const {data, error, loading, fetchData} = useFetch('http://localhost:8080/products');
    
    

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
    )
}
export default Oferta;