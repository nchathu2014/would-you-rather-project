import React, {Component} from 'react';
import {connect} from "react-redux";
import {pick, orderBy}from "lodash";

import Badge from "react-bootstrap/Badge";
import gold_cup from "./../assets/images/gold_cup.png";
import silver_cup from "./../assets/images/silver_cup.png";
import bronze_cup from "./../assets/images/bronze_cup.png";

import {Card} from "react-bootstrap";

class LeaderBoard extends Component {
    render() {
        const medals = [gold_cup, silver_cup, bronze_cup];
        return (
            <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '30px auto'}}>
                {this.props.users.map((user, index) => (
                    <li key={user.id}>
                        <Card style={{width: '16rem'}}>
                            <Card.Header style={{textAlign: 'center'}}><strong>{user.name}</strong></Card.Header>
                            <Card.Img variant="top" src={user.avatarURL}/>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>
                                    <h2>
                                        <Badge variant="danger"> {`Score: ${user.score}`}</Badge>
                                        <Card.Img variant="top" src={medals[index]} style={{width: '40%'}}/>
                                    </h2>
                                </Card.Title>
                                <Card.Text>
                                    <span style={{display:'inline-block'}}>
                                        <b>Answered Questions:</b> {Object.keys(user.answers).length}
                                    </span>
                                    <span style={{display:'inline-block'}}>
                                        <b>Created Questions:</b> {user.questions.length}
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps({users, loggedUser}) {

    const usersList = Object.keys(users).map(userId => users[userId]);
    usersList.map(user => {
        const {answers, questions} = pick(user, ['answers', 'questions']);
        const score = Object.keys(answers).length + questions.length;
        user['score'] = score;
        return user;
    });

    return {
        loggedUser,
        users: orderBy(usersList, ['score'], ['desc'])
    }
}

export default connect(mapStateToProps)(LeaderBoard);