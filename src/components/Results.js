import React,{useEffect} from "react";
import {Card, Button, Container, Row, Col, Alert, ProgressBar, Form} from "react-bootstrap";
import {withRouter,Link} from "react-router-dom";
import {connect} from "react-redux";
import Badge from "react-bootstrap/Badge";
import Redirect from "react-router-dom/es/Redirect";


const Results = function Results(props){


    //console.log('@@this.props.loggedUser@@@@@',props.loggedUser)
    if(props.loggedUser === null){return <Redirect to="/login"/>}

    //if(id === null){return <Redirect to="/login"/>}

    const {filteredQuestion,userName,avatarURL} = props.location.state;

    const optionOneVotes = filteredQuestion[0].optionOne.votes.length;
    const optionTwoVotes = filteredQuestion[0].optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    const optionOnePercentage = (optionOneVotes/totalVotes*100).toFixed(1);
    const optionTwoPercentage = (optionTwoVotes/totalVotes*100).toFixed(1);



    const isUserSelectOptionOne = filteredQuestion[0].optionOne.votes.includes(props.loggedUser.id)


    const handleBack = () => {
      props.history.push('/dashboard')
    };



    return(
        <div>



            <Card style={{ width: '44rem' , margin:'50px auto'}}>
                <Card.Header><strong>Asked By</strong> {userName}
                    <Link to="/dashboard" style={{float:'right'}}>[Back]</Link>
                </Card.Header>
                <Container>
                    <Row>
                        <Col sm={5}>
                            <Card.Img variant="top" src={avatarURL} />
                            {/*<Button variant="success" style={{width:'50%'}} onClick={handleBack}>Back</Button>*/}
                        </Col>
                        <Col sm={7}>
                            <Card.Body style={{padding:0}}>
                                <Card.Title>Results</Card.Title>
                                <Card.Text>
                                    <Alert variant="info">
                                        <Badge pill variant="warning" style={{fontSize:16,float:'right'}}>
                                            {isUserSelectOptionOne?"Voted":null}
                                        </Badge>

                                        <p>{filteredQuestion[0].optionOne.text}</p>
                                        <ProgressBar variant="success" now={optionOnePercentage} label={`${optionOnePercentage}%`} />
                                        {optionOneVotes} out of {totalVotes} votes
                                    </Alert>
                                    <Alert variant="danger">
                                        <Badge pill variant="warning" style={{fontSize:16,float:'right'}}>
                                            {!isUserSelectOptionOne?"Voted":null}
                                        </Badge>
                                        <p>{filteredQuestion[0].optionTwo.text}</p>
                                        <ProgressBar variant="secondary" now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
                                        {optionTwoVotes} out of {totalVotes} votes
                                    </Alert>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>


            </Card>

        </div>
    );
};

function mapStateToProps({loggedUser}) {
    return{
        loggedUser
    }
}

export default withRouter(connect(mapStateToProps)(Results));