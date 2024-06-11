import { Row, Col, Navbar, Button, Container  } from "react-bootstrap";
import MenuItem from "./MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { doLogOut } from "../store/UserSlice";


function Menu(props){

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(doLogOut());
    }

    return(
        <Row>
        <Navbar bg="dark">
        <MenuItem 
        nazwa= {"oferta"}
        link= {"/oferta"}
        />
        <MenuItem 
        nazwa= {"moje zamowienia"}
        link= {"/zamowienia"}
        />
        <Col>
        
        <Container>
            <Navbar >
                <Container>
                <Button onClick={handleLogOut}>wyloguj</Button>
                </Container>
            </Navbar>
        </Container>
        </Col>
        </Navbar>
</Row>
    )
}

export default Menu;