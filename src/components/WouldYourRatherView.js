import React from "react";
import {Card, Button, Container,Row,Col,Alert,ProgressBar} from "react-bootstrap";

export default function WouldYouRatherView({questions}){
    console.log('ZZZ',questions)
    return(<div>
            {questions.map(item => (
                <Card className="text-center" style={{width:'45%',margin:'10% auto'}}>
                    <Card.Header style={{fontWeight:'bold',fontSize:14}}>
                        <h3>{item.author}</h3>
                    </Card.Header>
                    <Card.Body>
                        <Container fluid="md">
                            <Row>
                                <Col sm={3}>{item.avatarURL}</Col>
                                <Col sm={9}>
                                    <p>Option 1</p>
                                    <Button variant="success">View Poll</Button>

                                </Col>

                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            ))}
        </div>

    );
}