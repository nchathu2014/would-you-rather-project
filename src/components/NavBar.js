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
            {props.loggedUser !== null &&
            <ul>
                <li>
                    <NavLink
                        exact
                        to={props.loggedUser !== null ? "/dashboard" : "/"}
                        activeClassName={props.loggedUser !== null?"active":"select"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={props.loggedUser !== null ? "/new-question" : "/"}
                        activeClassName={props.loggedUser !== null?"active":"select"}>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={props.loggedUser !== null ? "/leader-board" : "/"}
                        activeClassName={props.loggedUser !== null?"active":"select"}>
                        Leader Board
                    </NavLink>
                </li>

                {props.loggedUser !== null &&
                <li>
                    <strong>Signed in as: </strong> {props.loggedUser}
                    <Button  style={{marginLeft:10}} variant="outline-success" onClick={handleLogout}>Logout</Button>

                </li>
                }

            </ul>
            }
        </nav>
    );
}


export default withRouter(connect()(NavBar));

