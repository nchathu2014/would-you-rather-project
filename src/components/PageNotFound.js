import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function PageNotFound(){
    return(
        <Jumbotron style={{textAlign:'center',width:'60%',margin:'10% auto'}}>
            <h1>404</h1>
            <p>Oops...Page Not Found</p>
            <p>

                    <Link to="/login">Back to Login</Link>

            </p>
        </Jumbotron>
    );
}