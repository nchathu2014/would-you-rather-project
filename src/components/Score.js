import React,{Component} from 'react';
import {connect} from "react-redux";
import {Button, Card, Form} from "react-bootstrap";
import Badge from "react-bootstrap/Badge";


const Score = function Score(props){

    console.log('@@@USER@@@',props.user)
    const {questions,answers,avatarURL,name} =  props.user;
    const answeredQuestions = Object.keys(answers);
    const score = questions.length + answeredQuestions.length;

    return(
        <div>
            <Card style={{ width: '15rem'}}>
                <Card.Header><strong>{name}</strong></Card.Header>
                <Card.Img variant="top" src={avatarURL} />
                <Card.Body>
                    <Card.Title>
                        <h2>
                            <Badge variant="secondary"> {`Score: ${score}`}</Badge>
                        </h2>
                    </Card.Title>
                    <Card.Text>


                            <Badge pill variant="success">
                                Answered Questions: {answeredQuestions.length}
                            </Badge>


                            <Badge pill variant="warning">
                                Created Questions: {questions.length}
                            </Badge>





                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

function mapStateToProps({users},{userId}) {
    return{
        userId,
        user:users[userId]
    }
}

export default connect(mapStateToProps)(Score)

