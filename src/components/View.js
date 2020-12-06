import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {Card, Button, Container, Row, Col, Form} from "react-bootstrap";
import {saveQuestionAnswer} from "../actions/shared";

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
            pathname: `/questions/${question.id}`
        });
    };

    render() {

        const {name, avatarURL, question} = this.props;
        const optionOneText = question.optionOne.text;
        const optionTwoText = question.optionTwo.text;
        const {selectOption} = this.state;

        return (
            <Card style={{width: '35rem', margin: '40px auto'}}>
                <Card.Header><strong>{name}</strong> asks
                    <Link to={{pathname: '/', state: {from: 'view-only'}}}
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
                                    onClick={() => this.handleSubmit(question, selectOption)}>Submit</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card>
        );
    }
}

export default withRouter(connect()(View));