import React, {Fragment} from "react";
import {Card, Button, Container,Row,Col,Form} from "react-bootstrap";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const  WouldYouRatherSelect = function WouldYouRatherSelect(props){

    const handleBack = () => {
        props.history.push('/home');
    };

    return(
        <Fragment>
            <Card className="text-center" style={{width:'35%',margin:'10% auto'}}>
                <Card.Header style={{fontWeight:'bold',fontSize:14}}>Nuwan Chathuranga</Card.Header>
                <Card.Body>
                    <Container fluid="md">
                        <Row>
                            <Col sm={2}>IMAGE</Col>
                            <Col sm={10}>
                                <div><h3>Would You Rather...</h3></div>
                                <Form>
                                    <Form.Check
                                        type={'radio'}
                                        id={`default-radio`}
                                        label={'Option 1'}
                                        name={'grp1'}
                                    />
                                    <Form.Check
                                        type={'radio'}
                                        id={`default-radio`}
                                        label={`Option 2`}
                                        name={'grp1'}
                                    />


                                </Form>
                            </Col>

                        </Row>
                    </Container>
                    <Button variant="success">Submit</Button>
                </Card.Body>
            </Card>
            <Button variant="warning" onClick={handleBack}>Back</Button>
        </Fragment>
    );
}

export default withRouter(connect()(WouldYouRatherSelect));