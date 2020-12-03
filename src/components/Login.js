import React, {Component} from "react";
import {Card, Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {addLoggedUserToStore} from "../actions/loggedUser";
import loginImg from "./../assets/images/login.png";

class Login extends Component {

    state = {
        selectedUser: null
    };

    handleLoginUserSelect = (e) => {
        const {users} = this.props;
        this.setState({
            selectedUser: e.target.value === "-1" ? "-1" : users[e.target.value]
        });
    };

    handleUserLogin = () => {
        const {selectedUser} = this.state;
        if (selectedUser !== "-1") {
            this.props.dispatch(addLoggedUserToStore(selectedUser));
            this.props.history.push({
                pathname: '/dashboard',
                state: {from: 'home'}
            })
        }
    };

    render() {
        return (
            <Card className="text-center" style={{width: '30%', margin: '5% auto'}}>
                <Card.Header style={{background: '#343A40', color: '#fff'}}>
                    <div style={{fontWeight: 'bold', fontSize: 18, color: "#FFC107"}}>
                        Welcome to the Would You Rather App!!!
                    </div>
                    <div style={{fontSize: 16}}>Please sign into continue</div>
                </Card.Header>

                <Card.Img variant="top" src={loginImg} style={{width: '45%', margin: '0 auto'}}/>
                <Card.Body>
                    <Card.Title>{"Sign In"}</Card.Title>
                    <Card.Text>
                        <Form.Control as="select" onChange={(e) => this.handleLoginUserSelect(e)}>
                            <option value="-1">--- Select User ---</option>
                            {this.props.userIds.length > 0 &&
                            this.props.userIds.map(userId => (
                                <option key={userId} value={userId}>
                                    {this.props.users[userId].name}
                                </option>
                            ))
                            }
                        </Form.Control>


                    </Card.Text>
                    {(this.state.selectedUser !== null && this.state.selectedUser !== "-1") &&
                    <Button
                        variant="outline-dark"
                        style={{margin: 0, width: '100%'}}
                        onClick={this.handleUserLogin}>Sign In</Button>
                    }
                </Card.Body>

                <Card.Footer style={{background: '#343A40', color: '#fff', fontSize: 14}}>
                    &copy; Copyright 2020: {' '}
                    <a href="https://www.linkedin.com/in/nchathu/" target="_blank" style={{color: '#fff'}}>[Find Me]</a>
                </Card.Footer>
            </Card>
        );
    }
}

function mapStateToProps({users}) {
    return {
        users,
        userIds: Object.keys(users)
    }
}

export default withRouter(connect(mapStateToProps)(Login));