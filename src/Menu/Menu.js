import { Row, Col, Navbar } from "react-bootstrap";
import MenuItem from "./MenuItem";

function Menu(props){

    return(
        <Row>

        <Navbar>


        
        <MenuItem 
        nazwa= {"name"}
        link= {"/"}
        />
        
        
        <MenuItem></MenuItem>
        
        </Navbar>
</Row>
    )

}

export default Menu;