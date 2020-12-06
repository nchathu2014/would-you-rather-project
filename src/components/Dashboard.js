import React, {Component} from "react";
import {Tabs, Tab, Card, Button} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";
import * as _ from "lodash";
import {withRouter} from "react-router-dom";
import {getQuestionsFromBE} from "../actions/shared";

class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(getQuestionsFromBE());
    }

    render() {
        const {questions, users, loggedUser} = this.props;
        questions.map(question => {
            return question['userInfo'] = users[question.author]
        });

        const answeredQuestions = questions.filter(question => {
            const votes = question.optionOne.votes.concat(question.optionTwo.votes);
            return votes.includes(loggedUser.loggedUser.id) === true
        });

        const unAnsweredQuestions = questions.filter(question => {
            const votes = question.optionOne.votes.concat(question.optionTwo.votes);
            return votes.includes(loggedUser.loggedUser.id) === false
        });

        const answeredQuestionsSorted = _.orderBy(answeredQuestions, ['timestamp'], ['desc']);
        const unAnsweredQuestionsSorted = _.orderBy(unAnsweredQuestions, ['timestamp'], ['desc']);

        const showResults = (e, questionId) => {

            e.preventDefault();
            this.props.history.push({
                pathname: `/questions/${questionId}/results`
            });
        };

        const showViews = (e, questionId) => {
            e.preventDefault();

            this.props.history.push({
                pathname: `/questions/${questionId}`
            });
        };

        return (
            <Tabs id="uncontrolled-tab-example" defaultActiveKey={"unAnsweredQs"}
                  style={{margin: "5px 0"}}>
                <Tab eventKey="answeredQs" title="Answered Questions" style={{marginTop: 30}}>
                    <ul style={{listStyle: 'none', display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
                        {answeredQuestionsSorted.map(question => (
                            <li key={question.id}>
                                <Card style={{width: '15rem', height: "100%", textAlign: 'center'}}>
                                    <Card.Img variant="top" src={question.userInfo.avatarURL}/>
                                    <Card.Body
                                        style={{background: question.author === loggedUser.loggedUser.id ? '#FFD65A' : '#fff'}}>
                                        <Card.Title>{question.userInfo.name}</Card.Title>
                                        <Card.Text>
                                            <div
                                                style={{fontWeight: 'normal', height: 48}}>...{question.optionOne.text}...
                                            </div>
                                        </Card.Text>
                                        <Button style={{width: '90%', margin: 0}} variant="outline-dark"
                                                onClick={(e) => showResults(e, question.id, question.userInfo.name, question.userInfo.avatarURL)}>View
                                            Poll</Button>
                                    </Card.Body>
                                </Card>
                            </li>
                        ))}
                    </ul>
                </Tab>
                <Tab eventKey="unAnsweredQs" title="Unanswered Questions" style={{marginTop: 30}}>
                    <ul style={{listStyle: 'none', display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
                        {unAnsweredQuestionsSorted.map(question => (
                            <li key={question.id}>
                                <Card style={{width: '15rem', height: "100%", textAlign: 'center'}}>
                                    <Card.Img variant="top" src={question.userInfo.avatarURL}/>
                                    <Card.Body
                                        style={{background: question.author === loggedUser.loggedUser.id ? '#FFD65A' : '#fff'}}>
                                        <Card.Title>{question.userInfo.name}</Card.Title>
                                        <Card.Text>
                                            <div
                                                style={{fontWeight: 'normal', height: 48}}>...{question.optionOne.text}...
                                            </div>
                                        </Card.Text>
                                        <Button style={{width: '90%', margin: 0}} variant="outline-dark"
                                                onClick={(e) => showViews(e, question.id, question.userInfo.name, question.userInfo.avatarURL)}>View
                                            Poll</Button>
                                    </Card.Body>
                                </Card>
                            </li>
                        ))}
                    </ul>
                </Tab>
            </Tabs>
        );
    }
};

function mapStateToProps({users, questions, loggedUser}) {
    return {
        users,
        questions: Object.keys(questions).map(questionId => questions[questionId]),
        loggedUser
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard));
