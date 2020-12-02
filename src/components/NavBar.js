import React, {Component} from "react";
import {Nav,Navbar,Button} from "react-bootstrap";
import {connect} from "react-redux";
import {removeLoggedUserToStore} from "../actions/loggedUser";
import { NavLink,Link,withRouter } from 'react-router-dom'


const NavBar = function NavBar(props){


     const handleLogout = () => {
        props.dispatch(removeLoggedUserToStore());
        //props.history.push(`/login`)
    };

    return(
        <div>
            {/*<nav className="nav">
        <ul>
            <li>
                <NavLink
                    exact
                    to={"/dashboard"}
                    activeClassName={"active"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/new-question"}
                    activeClassName={"active"}>
                    New Question
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/leader-board"}
                    activeClassName={"active"}>
                    Leader Board
                </NavLink>
            </li>


            <li>
                <strong>Signed in as: </strong> {props.loggedUser.name}
                <Button  style={{marginLeft:10}} variant="outline-success" onClick={handleLogout}>Logout</Button>

            </li>


        </ul>
    </nav>*/}
            <Navbar style={{background:'#eee'}}>
                <Navbar.Brand>Would You Rather</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {/*<Nav className="mr-auto">
                            <Nav.Link>
                                <Link to={"/dashboard"}  activeClassName={"active"}>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/new-question"}  activeClassName={"active"}>New Question</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/leader-board"}  activeClassName={"active"}>Leader Board</Link>
                            </Nav.Link>
                        </Nav>*/}
                    <Nav className="mr-auto nav">
                        <ul style={{padding:0,margin:0}}>
                            <li>
                                <NavLink
                                    exact
                                    to={"/dashboard"}
                                    activeClassName={"active"}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/new-question"}
                                    activeClassName={"active"}>
                                    New Question
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/leader-board"}
                                    activeClassName={"active"}>
                                    Leader Board
                                </NavLink>
                            </li>
                        </ul>
                    </Nav>

                    <nav className="nav">

                    </nav>
                    <Navbar.Text>
                        <strong>Signed in as: </strong>
                        <span style={{fontStyle:'italic'}}>{props.loggedUser.name}</span>{' '}
                        <Link to="/login" onClick={handleLogout}>[Logout]</Link>
                        {/*<Button  style={{width:'26%'}} size={'sm'} variant="outline-success" onClick={handleLogout}>Logout</Button>
*/}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );


}

export default connect()(NavBar);
//export default withRouter(connect()(NavBar));

