import React, {Component} from "react";
import {Card, Button, Container, Row, Col, Alert, ProgressBar, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {saveQuestionAnswer} from "../actions/shared";
import {Link, Redirect} from "react-router-dom";

class View extends Component {

    state = {
        selectOption: ""
    };

    handleSelection = (event) => {
        this.setState({
            selectOption: event.target.value
        })
    };

    handleSubmit = (question, selectOption) => {
        this.props.dispatch(saveQuestionAnswer(question, selectOption));
        this.props.history.push({
            pathname: '/dashboard',
            state: {from: 'view'}
        });
    };

    render() {
        if (this.props.loggedUser === null) {
            return <Redirect to="/logout"/>
        }

        const {filteredQuestion, userName, avatarURL} = this.props.location.state;
        const optionOneText = filteredQuestion[0].optionOne.text;
        const optionTwoText = filteredQuestion[0].optionTwo.text;
        const {selectOption} = this.state;

        return (
                <Card style={{width: '35rem', margin: '40px auto'}}>
                    <Card.Header><strong>{userName}</strong> asks
                        <Link to={{pathname: '/dashboard', state: {from: 'view-only'}}}
                              style={{float: 'right'}}>[Back]</Link>
                    </Card.Header>
                    <Container>
                        <Row>
                            <Col sm={5}>
                                <Card.Img variant="top" src={avatarURL}/>

                            </Col>
                            <Col sm={7}>
                                <Card.Body style={{padding: 0}}>
                                    <Card.Title>{"Would You Rather..."}</Card.Title>
                                        <Form>
                                            <Form.Check
                                                type={'radio'}
                                                id={`default-radio`}
                                                label={optionOneText}
                                                name={'grp1'}
                                                value={'optionOne'}
                                                onChange={this.handleSelection}
                                            />
                                            <Form.Check
                                                type={'radio'}
                                                id={`default-radio`}
                                                label={optionTwoText}
                                                name={'grp1'}
                                                value={'optionTwo'}
                                                onChange={this.handleSelection}
                                            />
                                        </Form>
                                    <Button
                                        variant="outline-dark"
                                        disabled={!this.state.selectOption}
                                        onClick={() => this.handleSubmit(filteredQuestion[0], selectOption)}>Submit</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card>
        );
    }
}

function mapStateToProps({loggedUser}) {
    return {
        loggedUser
    }
}

export default connect(mapStateToProps)(View);