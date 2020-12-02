import React from "react";
import {Nav,Navbar,Button} from "react-bootstrap";
import {connect} from "react-redux";
import {removeLoggedUserToStore} from "../actions/loggedUser";
import { NavLink,withRouter } from 'react-router-dom'


function NavBar(props){


    const handleLogout = () => {
        props.dispatch(removeLoggedUserToStore());
        props.history.push(`/login`)
    };

    return(

        <nav className="nav">
           <ul>
                <li>
                    <NavLink
                        exact
                        to={"/dashboard"}
                        activeClassName>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/new-question"}
                        activeClassName>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/leader-board"}
                        activeClassName>
                        Leader Board
                    </NavLink>
                </li>


                <li>
                    <strong>Signed in as: </strong> {props.loggedUser.name}
                    <Button  style={{marginLeft:10}} variant="outline-success" onClick={handleLogout}>Logout</Button>

                </li>


            </ul>
        </nav>
    );
}


export default withRouter(connect()(NavBar));

