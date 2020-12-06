import React from "react";
import {NavLink, Link} from 'react-router-dom'
import {connect} from "react-redux";

import {Nav, Navbar,Badge} from "react-bootstrap";
import {removeLoggedUserToStore} from "../actions/loggedUser";
import {removeQuestionsFromStore} from "../actions/questions";

const NavBar = function NavBar(props) {

    const handleLogout = () => {
        props.dispatch(removeLoggedUserToStore());
        props.dispatch(removeQuestionsFromStore())
    };

    return (
        <Navbar bg="dark">
            <Navbar.Brand>
                <Badge variant="warning" style={{fontSize: 18, padding: 10}}> Would - You - Rather</Badge>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto nav">
                    <ul style={{padding: 0, margin: 0}}>
                        <li>
                            <NavLink
                                exact
                                to={{
                                    pathname: "/",
                                    state: {from: 'home'}
                                }}
                                activeClassName={"active"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/add"}
                                activeClassName={"active"}>
                                New Question
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/leaderboard"}
                                activeClassName={"active"}>
                                Leader Board
                            </NavLink>
                        </li>
                    </ul>
                </Nav>

                <Navbar.Text style={{color: '#eee'}}>
                    <strong>Signed in as: </strong>
                    <img
                        src={props.loggedUser.avatarURL}
                        width={32}
                        height={32}
                        style={{borderRadius: 100}}
                        alt={`user ${props.loggedUser.name}`}
                    /> {' '}
                    <span style={{fontStyle: 'italic'}}>{props.loggedUser.name}
                        </span>{' '}
                    <Link to="/logout" onClick={handleLogout} style={{color: '#FFC107'}}>[Logout]</Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default connect()(NavBar);


