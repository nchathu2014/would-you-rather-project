import React from "react";
import {Nav,Navbar,Button} from "react-bootstrap";
import {connect} from "react-redux";
import {removeLoggedUserToStore} from "../actions/loggedUser";


function NavBar(props){

    const {loggedUser} = props;

    const handleLogout = () => {
        props.dispatch(removeLoggedUserToStore());
    };

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">WYR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="pills">
                    <Nav.Link href="/home" disabled = {loggedUser === null}>Home</Nav.Link>
                    <Nav.Link href="#link" disabled = {loggedUser === null}>New Question</Nav.Link>
                    <Nav.Link href="#link" disabled = {loggedUser === null}>Leader Board</Nav.Link>
                </Nav>
                {(loggedUser !== null) &&
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                         <strong>Signed in as: </strong> {loggedUser}
                        <Button  style={{marginLeft:10}} variant="outline-success" onClick={handleLogout}>Logout</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
                }

            </Navbar.Collapse>
        </Navbar>
    );
}

function mapStateToProps({loggedUser}) {
    return{
        loggedUser
    }
}

export default connect(mapStateToProps,null)(NavBar);