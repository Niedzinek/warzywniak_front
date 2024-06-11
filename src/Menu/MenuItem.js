import { Button, Container, Navbar } from "react-bootstrap";
import {Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MenuItem(props){

    let navigate = useNavigate();

    function handleClick(link){
            navigate(link);
    }

    return(
        <Col>
        
        
        <Container>
            <Navbar >
                <Container>
                <Button onClick={() => handleClick(props.link)}>{props.nazwa}</Button>
                </Container>
            </Navbar>
        </Container>
        </Col>
    )
}

export default MenuItem;