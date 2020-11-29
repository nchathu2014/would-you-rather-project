import React from "react";
import {Tabs,Tab, Card,Button} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";
import * as _ from "lodash";
import {withRouter} from "react-router-dom";



const Home = function Home(props){

    props.questions.map(question=> question['userInfo'] = props.users[question.author]);


    const answeredQuestions = props.questions.filter(question => {
        const votes = question.optionOne.votes.concat(question.optionTwo.votes);
        return votes.includes(props.loggedUser) === true
    });

    const unAnsweredQuestions = props.questions.filter(question => {
        const votes = question.optionOne.votes.concat(question.optionTwo.votes);
        console.log(votes,props.loggedUser,votes.includes(props.loggedUser))
        return votes.includes(props.loggedUser) === false
    });

    const showResults = (e,questionId) => {
        e.preventDefault();
        props.history.push(`/questions/${questionId}/results`);
    };

    const showViews = (e,questionId) => {
       e.preventDefault();
       props.history.push(`/questions/${questionId}`);
    };

        return (
            <div>
                <Tabs id="uncontrolled-tab-example">
                    <Tab eventKey="answeredQs" title="Answered Questions" defaultactivekey={'answeredQs'}>
                        <ul style={{listStyle:'none',display:"flex", flexWrap:'wrap', justifyContent:'center'}}>
                            {answeredQuestions.map(question=>(
                                <li>
                                    <Card style={{ width: '18rem' ,display:'flex'}}>
                                        <Card.Img variant="top" src={question.userInfo.avatarURL} />
                                        <Card.Body>
                                            <Card.Title>{question.userInfo.name}</Card.Title>
                                            <Card.Text>
                                                <div>...{question.optionOne.text}...</div>
                                                <Button variant="primary" onClick={(e) => showResults(e,question.id)}>View Poll</Button>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    </Tab>
                    <Tab eventKey="unAnsweredQs" title="Unanswered Questions">
                        <ul style={{listStyle:'none',display:"flex", flexWrap:'wrap', justifyContent:'center'}}>
                            {unAnsweredQuestions.map(question=>(
                                <li>
                                    <Card style={{ width: '18rem' ,display:'flex'}}>
                                        <Card.Img variant="top" src={question.userInfo.avatarURL} />
                                        <Card.Body>
                                            <Card.Title>{question.userInfo.name}</Card.Title>
                                            <Card.Text>
                                                <div>...{question.optionOne.text}...</div>
                                                <Button variant="primary" onClick={(e) => showViews(e,question.id)}>View Poll</Button>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    </Tab>
                </Tabs>
            </div>

        );

};


function mapStateToProps({users,questions,loggedUser}) {
    return{
        users,
        questions: Object.keys(questions).map(questionId => questions[questionId]),
        loggedUser
    }
}

export default withRouter(connect(mapStateToProps)(Home));
//export default Home;