import React from "react";
import {Card, Button, Container,Row,Col,Alert,ProgressBar} from "react-bootstrap";

export default function View(props){
    console.log('######### VIEW PAGE: ',props.location.state);
    return(
        <div>
            <Card style={{ width: '25rem' , margin:'0 auto'}}>
                <Card.Img variant="top" src={''} />
                <Card.Body>
                    <Card.Title>{"View"}</Card.Title>
                    <Card.Text>
                        <div>{'Text'}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Button variant="success">Back</Button>
        </div>
    );
}