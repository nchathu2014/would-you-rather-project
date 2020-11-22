import React from "react";
import {Card, Button, Container,Row,Col,Alert,ProgressBar} from "react-bootstrap";

export default function Score(){
    return(
        <Card className="text-center" style={{width:'45%',margin:'10% auto'}}>
            <Card.Header style={{fontWeight:'bold',fontSize:14}}>
                <h3>Nuwan Chathuranga</h3>
            </Card.Header>
            <Card.Body>
                <Container fluid="md">
                    <Row>
                        <Col sm={3}>IMAGE</Col>
                        <Col sm={6}>
                            <p>Answered Questions: 3</p>
                            <p>Crated Questions: 3</p>

                        </Col>
                        <Col sm={3}>
                            SCORE
                        </Col>

                    </Row>
                </Container>
                <Button variant="success">Submit</Button>
            </Card.Body>
        </Card>
    );
}