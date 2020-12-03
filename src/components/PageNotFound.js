import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import {Link} from "react-router-dom";

export default function PageNotFound(){
    return(
        <Jumbotron style={{textAlign:'center',width:'60%',margin:'10% auto'}}>
            <h1>404</h1>
            <div>Oops...Page Not Found</div>
            <div>
                <Link to="/login">Back to Login</Link>
            </div>
        </Jumbotron>
    );
}