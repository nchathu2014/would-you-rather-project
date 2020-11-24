import React,{Component} from 'react';
import Score from "./Score";
import {connect} from "react-redux";

class LeaderBoard extends Component{
   render() {
       return(
           <ul>
               {this.props.usersIds.map(userId => (
                   <li key={userId}>
                       <Score userId={userId}/>
                   </li>
               ))}
           </ul>
       );
   }
}

function mapStateToProps({users}) {
    return{
        usersIds:Object.keys(users)
    }
}

export default connect(mapStateToProps,null)(LeaderBoard);