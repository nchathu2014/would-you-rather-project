import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getQuestionsFromBE, saveNewQuestionToBE} from "../actions/shared";
import {Card, Button, Form} from "react-bootstrap";

import questionImg from "../assets/images/question.png";

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: ''
    };

    componentDidMount() {
        this.props.dispatch(getQuestionsFromBE());
    }

    handleOnChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = () => {
        const {loggedUser} = this.props.loggedUser;


        const newQuestion = {
            author: loggedUser.id,
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo,
        };

        this.props.dispatch(saveNewQuestionToBE(newQuestion));
        this.props.history.push({
            pathname: '/'
        });
    };

    render() {
        const {optionOne, optionTwo} = this.state;
        const isSubmitBtnEnable = optionOne.length > 0 && optionTwo.length > 0;

        return (
            <Card className="text-center" style={{width: '35%', margin: '30px auto'}}>
                <Card.Header style={{fontWeight: 'bold', fontSize: 18}}> Create New Question </Card.Header>
                <Card.Img variant="top" src={questionImg} style={{width: '20%', margin: '10px auto'}}/>
                <Card.Body>
                    <Card.Title style={{fontSize: 16}}>
                        <span style={{display:'inline-block'}}>Complete the question:</span>
                        <span  style={{display:'inline-block'}}><b>Would you rather...</b></span>
                    </Card.Title>

                    <Card.Text>
                        <Form>
                            <Form.Control
                                type="text"
                                name="optionOne"
                                placeholder="Enter Option One Text Here"
                                onChange={(e) => this.handleOnChange(e)}
                                value={this.state.optionOne}
                            />
                            <div style={{margin: '10px 0'}}>OR</div>
                            <Form.Control
                                type="text"
                                name="optionTwo"
                                placeholder="Enter Option Two Text Here"
                                onChange={(e) => this.handleOnChange(e)}
                                value={this.state.optionTwo}
                            />
                        </Form>
                    </Card.Text>
                    {isSubmitBtnEnable &&
                    <Button
                        variant="outline-dark"
                        onClick={this.handleSubmit}>Submit</Button>
                    }
                </Card.Body>
            </Card>
        );
    }
}

function mapStateToProps({loggedUser}) {
    return {
        loggedUser
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));