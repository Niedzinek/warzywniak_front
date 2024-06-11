import { useSelector } from "react-redux"
import KoszykCard from "../components/KoszykCard"
import {Row, Col, Button} from "react-bootstrap"
import { useEffect, useState } from "react"
import useFetch from "../services/useFetch"
import { selectCurrentUser } from "../store/UserSlice"



function Podsumowanie(){
    const checkout = useSelector((state) => state.cart)
    const user = useSelector(selectCurrentUser);

    const [postData, setPostData] = useState(null);
    const { data, error, loading, fetchData } = useFetch('http://localhost:8080/purchase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });   


    useEffect(() => {
    const orderedProducts = checkout.list.map((item) =>({
        quantity: item.ilosc.toString(),
        product: {
            id: item.id.toString()
        }
    }));

        setPostData({
            "userId": user.sub,
            "orderedProducts": orderedProducts
        })
    },[checkout.list])
    const handleSubmit = async () => {


         await fetchData({
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(postData)
         });


    } 



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
            <Button onClick={handleSubmit}>Złóż zamówienie</Button>
        </Row>

    )
}

export default Podsumowanie