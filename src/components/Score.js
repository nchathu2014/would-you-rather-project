import React,{Component} from "react";
import {Card, Button, Container,Row,Col,Alert,ProgressBar} from "react-bootstrap";
import {connect} from "react-redux";

class Score extends Component{
    render() {
        console.log('@@@USER@@@',this.props.user)
        const {questions,answers,avatarURL,name} =  this.props.user;
        const answeredQuestions = Object.keys(answers);
        const score = questions.length + answeredQuestions.length;
        return(
            <Card className="text-center" style={{width:'45%',margin:'1% auto'}}>
                <Card.Header style={{fontWeight:'bold',fontSize:16}}>
                    {this.props.userId}
                </Card.Header>
                <Card.Body>
                    <Container fluid="md">
                        <Row>
                            <Col sm={3}>
                                <img width={70} height={70} src={avatarURL} alt={`Image of user ${name}`}/>
                            </Col>
                            <Col sm={6}>
                                <p>Answered Questions: {answeredQuestions.length}</p>
                                <p>Crated Questions: {questions.length}</p>

                            </Col>
                            <Col sm={3}>
                                SCORE: {score}
                            </Col>

                        </Row>
                    </Container>
                    <Button variant="success">Submit</Button>
                </Card.Body>
            </Card>
        );
    }
}

function mapStateToProps({users},{userId}) {
    return{
        userId,
        user:users[userId]
    }
}

export default connect(mapStateToProps)(Score)