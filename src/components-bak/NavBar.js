import React from "react";
import {Nav,Navbar,Button} from "react-bootstrap";
import {connect} from "react-redux";
import {removeLoggedUserToStore} from "../actions/loggedUser";
import { NavLink,withRouter } from 'react-router-dom'


function NavBar(props){

    const {loggedUser} = props;

    const handleLogout = () => {
        props.dispatch(removeLoggedUserToStore());
        props.history.push(`/`)
    };

    return(
        <nav className="nav">
            <ul>
                <li>
                    <NavLink
                        exact
                        to={loggedUser !== null ? "/home" : "/"}
                        activeClassName={loggedUser !== null?"active":"select"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={loggedUser !== null ? "/add" : "/"}
                        activeClassName={loggedUser !== null?"active":"select"}>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={loggedUser !== null ? "/leaderboard" : "/"}
                        activeClassName={loggedUser !== null?"active":"select"}>
                        Leader Board
                    </NavLink>
                </li>

                {loggedUser !== null &&
                <li>
                    <strong>Signed in as: </strong> {loggedUser}
                    <Button  style={{marginLeft:10}} variant="outline-success" onClick={handleLogout}>Logout</Button>

                </li>
                }

            </ul>
        </nav>
    );
}

function mapStateToProps({loggedUser}) {
    return{
        loggedUser
    }
}

export default withRouter(connect(mapStateToProps,null)(NavBar));