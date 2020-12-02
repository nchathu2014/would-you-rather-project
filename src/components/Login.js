import React,{Component} from "react";
import {Card, Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {addLoggedUserToStore} from "../actions/loggedUser";
import {Link, withRouter} from "react-router-dom";
import loginImg from "./../assets/images/login.png";


class Login extends Component{

    state = {
        selectedUser: null
    };


    handleLoginUserSelect = (e) => {
        const {users} = this.props;
        this.setState({
            selectedUser: users[e.target.value]
        });
    };

    handleUserLogin = () =>{
        const {selectedUser} = this.state;
        this.props.dispatch(addLoggedUserToStore(selectedUser));
        this.props.history.push('/dashboard')
        //this.props.history.push('/new-question')

    };

    render() {

        return(
            <div>
                <Card className="text-center" style={{width:'35%',margin:'5% auto'}}>
                    <Card.Header style={{background:'#89608E',color:'#fff'}}>
                        <div style={{fontWeight:'bold',fontSize:18}}>
                            Welcome to the Would You Rather App!!!
                        </div>
                        <div style={{fontSize:16}}>Please sign into continue</div>
                    </Card.Header>

                    <Card.Img variant="top" src={loginImg} style={{width: '45%', margin: '0 auto'}}/>
                    <Card.Body>
                        <Card.Title>{"Sign In"}</Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select" onChange={(e)=>this.handleLoginUserSelect(e)}>
                                        <option value="-1" selected disabled>--- Select User ---</option>
                                        {this.props.userIds.length > 0 &&
                                        this.props.userIds.map(userId =>(
                                            <option key={userId} value={userId}>
                                                {this.props.users[userId].name}
                                            </option>

                                        ))
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Card.Text>
                        {this.state.selectedUser !== null &&
                        <Button
                            variant="success"
                            style={{width:'100%',margin:0,background:'#89608E',borderColor:'#89608E'}}
                            disabled={this.state.selectedUser === null}
                            onClick={this.handleUserLogin}>Sign In</Button>
                        }


                    </Card.Body>

                    <Card.Footer style={{background:'#89608E',color:'#fff',fontSize:14}}>
                        &copy; Copyright 2020: {' '}
                        <a href="https://www.linkedin.com/in/nchathu/" target="_blank" style={{color:'#fff'}}>[Find Me]</a>
                    </Card.Footer>
                </Card>


                {/*<Card className="text-center" style={{width:'35%',margin:'10% auto'}}>
                   <Card.Header style={{fontWeight:'bold',fontSize:20}}>Welcome to the Would! You Rather App </Card.Header>
                   <Card.Body>
                       <Card.Title>Please Sign-In to Continue</Card.Title>
                       <Card.Text>
                           <Form>
                               <Form.Group controlId="exampleForm.ControlSelect1">
                                   <Form.Control as="select" onChange={(e)=>this.handleLoginUserSelect(e)}>
                                       <option value="-1" selected disabled>--- Select User ---</option>
                                       {this.props.users.length > 0 &&
                                       this.props.users.map(user =>(
                                           <option key={user.id} value={user.id}>
                                               {user.name}
                                           </option>

                                       ))
                                       }
                                   </Form.Control>
                               </Form.Group>
                           </Form>
                       </Card.Text>
                       <Button
                           variant="success"
                           style={{width:'100%'}}
                           disabled={this.state.selectedUser === null}
                           onClick={this.handleUserLogin}>Sign In</Button>
                   </Card.Body>
                   <Card.Footer className="text-muted">&copy; Copyright 2020</Card.Footer>
               </Card>*/}
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return{
        users,
        userIds:Object.keys(users)
    }
}

export default withRouter(connect(mapStateToProps)(Login));