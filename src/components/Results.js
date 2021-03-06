import React from "react";
import {Link, withRouter} from "react-router-dom";
import {Card, Container, Row, Col, Alert, ProgressBar, Badge} from "react-bootstrap";

const Results = function Results(props) {

    const {name, avatarURL, question, loggedUser} = props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    const optionOnePercentage = (optionOneVotes / totalVotes * 100).toFixed(1);
    const optionTwoPercentage = (optionTwoVotes / totalVotes * 100).toFixed(1);

    const isUserSelectOptionOne = question.optionOne.votes.includes(loggedUser.loggedUser.id)

    return (
        <Card style={{width: '44rem', margin: '50px auto'}}>
            <Card.Header><strong>Asked By</strong> {name}
                <Link to={{pathname: "/", state: {from: 'results'}}} style={{float: 'right'}}>[Back]</Link>
            </Card.Header>
            <Container>
                <Row>
                    <Col sm={5}>
                        <Card.Img variant="top" src={avatarURL}/>
                    </Col>
                    <Col sm={7}>
                        <Card.Body style={{padding: 0}}>
                            <Card.Title>Results</Card.Title>
                            <Card.Text>
                                <Alert variant="info">
                                    <Badge pill variant="warning" style={{fontSize: 16, float: 'right'}}>
                                        {isUserSelectOptionOne ? "My Vote" : null}
                                    </Badge>

                                    <div>{question.optionOne.text}</div>
                                    <ProgressBar variant="success" now={optionOnePercentage}
                                                 label={`${optionOnePercentage}%`}/>
                                    {optionOneVotes} out of {totalVotes} votes
                                </Alert>
                                <Alert variant="danger">
                                    <Badge pill variant="warning" style={{fontSize: 16, float: 'right'}}>
                                        {!isUserSelectOptionOne ? "My Vote" : null}
                                    </Badge>
                                    <div>{question.optionTwo.text}</div>
                                    <ProgressBar variant="secondary" now={optionTwoPercentage}
                                                 label={`${optionTwoPercentage}%`}/>
                                    {optionTwoVotes} out of {totalVotes} votes
                                </Alert>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};

export default withRouter(Results);