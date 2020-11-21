import React from "react";
import {Card, Button, Form} from "react-bootstrap";

export default function Login(){
    return(
        <Card className="text-center" style={{width:'50%',margin:'10% auto'}}>
            <Card.Header style={{fontWeight:'bold',fontSize:25}}>Welcome to the Would! You Rather App </Card.Header>
            <Card.Body>
                <Card.Title>Please Sign-In to Continue</Card.Title>
                <Card.Text>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                                <option value="-1">Select User</option>
                                <option>User One</option>
                                <option>User Two</option>
                                <option>User Three</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Card.Text>
                <Button variant="success">Sign In</Button>
            </Card.Body>
            <Card.Footer className="text-muted">&copy; Copyright 2020</Card.Footer>
        </Card>
    );
}