import React from "react";
import {Card, Button, Container,Row,Col,Alert,ProgressBar} from "react-bootstrap";
import {withRouter} from "react-router-dom";

const Results = function Results(props){

    const {filteredQuestion,userName,avatarURL} = props.location.state;

    const optionOneVotes = filteredQuestion[0].optionOne.votes.length;
    const optionTwoVotes = filteredQuestion[0].optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    const optionOnePercentage = optionOneVotes/totalVotes;
    const optionTwoPercentage = optionTwoVotes/totalVotes;

    console.log('######### VOTES ',optionOneVotes, optionTwoVotes);

    const handleBack = () => {
      props.history.push('/home')
    };

    return(
        <div>
            <Card style={{ width: '25rem' , margin:'0 auto'}}>
                <Card.Header><strong>Asked By</strong> {userName}</Card.Header>
                <Card.Img variant="top" src={avatarURL} />
                <Card.Body>
                    <Card.Title>Results</Card.Title>
                    <Card.Text>
                        <Alert variant="info">
                            <p>{filteredQuestion[0].optionOne.text}</p>
                            <ProgressBar variant="success" now={optionOnePercentage} label={`${optionOnePercentage}%`} />
                            {optionOneVotes} out of {totalVotes} votes
                        </Alert>
                        <Alert variant="danger">
                            <p>{filteredQuestion[0].optionTwo.text}</p>
                            <ProgressBar variant="secondary" now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
                            {optionTwoVotes} out of {totalVotes} votes
                        </Alert>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Button variant="success" onClick={handleBack}>Back</Button>
        </div>
    );
};

export default withRouter(Results);