import React from "react";
import {Card, Button, Form} from "react-bootstrap";

export default function NewQuestion(){
    return(
        <Card className="text-center" style={{width:'50%',margin:'10% auto'}}>
            <Card.Header style={{fontWeight:'bold',fontSize:25}}> Create New Question </Card.Header>
            <Card.Body>
                <Card.Title>Complete the question:</Card.Title>
                <Card.Title>Would you rather...</Card.Title>
                <Card.Text>
                    <Form>
                        <Form.Control type="text" placeholder="Enter Option One Text Here" />
                        OR
                        <Form.Control type="text" placeholder="Enter Option Two Text Here" />
                    </Form>
                </Card.Text>
                <Button variant="success">Submit</Button>
            </Card.Body>
        </Card>
    );
}