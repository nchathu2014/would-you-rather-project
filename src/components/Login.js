import React,{Component} from "react";
import {Card, Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {addLoggedUserToStore} from "../actions/loggedUser";
import {Link, withRouter} from "react-router-dom";

class Login extends Component{

    state = {
        selectedUser: null
    };


    handleLoginUserSelect = (e) => {
        const selectedUser =  e.target.value;
            this.setState({
                selectedUser
            });
    };

    handleUserLogin = () =>{
        const {selectedUser} = this.state;
        this.props.dispatch(addLoggedUserToStore(selectedUser));
        this.props.history.push(`/home`)
    };

    render() {
        return(
            <Card className="text-center" style={{width:'35%',margin:'10% auto'}}>
                <Card.Header style={{fontWeight:'bold',fontSize:20}}>Welcome to the Would! You Rather App </Card.Header>
                <Card.Body>
                    <Card.Title>Please Sign-In to Continue</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" onChange={(e)=>this.handleLoginUserSelect(e)}>
                                    <option value="-1">Select User</option>
                                    {this.props.users.length > 0 &&
                                    this.props.users.map(user =>(
                                        <option key={user} value={user}>{user}</option>
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
            </Card>
        );
    }
}

export default withRouter(connect()(Login));