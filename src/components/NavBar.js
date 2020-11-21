import React from "react";
import {Nav,Navbar,Button,Form} from "react-bootstrap";




export default function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#link" disabled>New Question</Nav.Link>
                    <Nav.Link href="#link" disabled>Leader Board</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                        <Button variant="outline-success">Search</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar.Collapse>
        </Navbar>
    );
}