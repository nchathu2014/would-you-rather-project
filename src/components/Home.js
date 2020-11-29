import React from "react";
import {Tabs,Tab, Card,Button} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";
import * as _ from "lodash";



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
                                            </Card.Text>
                                            <Button variant="primary">View Poll</Button>
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
                                            </Card.Text>
                                            <Button variant="primary">View Poll</Button>
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

export default connect(mapStateToProps)(Home);
//export default Home;