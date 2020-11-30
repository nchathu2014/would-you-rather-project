import React,{Component} from 'react';
import {connect} from "react-redux";
import Score from "../components/Score";


class LeaderBoard extends Component{
   render() {
       return(
           <ul style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
               {this.props.userIds.map(id=>(
                   <li>
                       <Score userId={id}/>
                   </li>
               ))}

           </ul>
       );
   }
}


export default LeaderBoard;