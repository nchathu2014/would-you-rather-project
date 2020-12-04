import React from "react";
import {withRouter, Redirect, Link} from "react-router-dom";
import {connect} from "react-redux";
import {Card, Container, Row, Col, Alert, ProgressBar, Badge} from "react-bootstrap";

const Results = function Results(props) {

    if (props.loggedUser === null) {
        return <Redirect to="/logout"/>
    }

    const {filteredQuestion, userName, avatarURL} = props.location.state;

    const optionOneVotes = filteredQuestion[0].optionOne.votes.length;
    const optionTwoVotes = filteredQuestion[0].optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    const optionOnePercentage = (optionOneVotes / totalVotes * 100).toFixed(1);
    const optionTwoPercentage = (optionTwoVotes / totalVotes * 100).toFixed(1);

    const isUserSelectOptionOne = filteredQuestion[0].optionOne.votes.includes(props.loggedUser.id)

    return (
        <Card style={{width: '44rem', margin: '50px auto'}}>
            <Card.Header><strong>Asked By</strong> {userName}
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

                                    <div>{filteredQuestion[0].optionOne.text}</div>
                                    <ProgressBar variant="success" now={optionOnePercentage}
                                                 label={`${optionOnePercentage}%`}/>
                                    {optionOneVotes} out of {totalVotes} votes
                                </Alert>
                                <Alert variant="danger">
                                    <Badge pill variant="warning" style={{fontSize: 16, float: 'right'}}>
                                        {!isUserSelectOptionOne ? "My Vote" : null}
                                    </Badge>
                                    <div>{filteredQuestion[0].optionTwo.text}</div>
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

function mapStateToProps({loggedUser}) {
    return {
        loggedUser
    }
}

export default withRouter(connect(mapStateToProps)(Results));