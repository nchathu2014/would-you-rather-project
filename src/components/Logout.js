import React from 'react';
import connect from "react-redux/es/connect/connect";
import {withRouter,Redirect} from "react-router-dom";


 const Logout =  function Logout(props) {


     if(props.loggedUser === null){
         return <Redirect to={'/login'}/>
     }

    return(
        <div>
            <h1>Logout....</h1>
        </div>
    )

}

function mapStateToProps({loggedUser}){
    return{
        loggedUser
    }
}

export default withRouter(connect(mapStateToProps)(Logout));