import React from "react";
import {Tabs,Tab, Card,Button} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";
import * as _ from "lodash";
import {withRouter} from "react-router-dom";



const Home = function Home(props){

    props.questions.map(question=> {
        console.log('#######question######',question);
        return question['userInfo'] = props.users[question.author]
    });


    const answeredQuestions = props.questions.filter(question => {
        const votes = question.optionOne.votes.concat(question.optionTwo.votes);
        return votes.includes(props.loggedUser) === true
    });

    //console.log('answeredQuestions =>>',answeredQuestions)


    const unAnsweredQuestions = props.questions.filter(question => {
        const votes = question.optionOne.votes.concat(question.optionTwo.votes);
        return votes.includes(props.loggedUser) === false
    });

    const showResults = (e,questionId,userName,avatarURL) => {

        e.preventDefault();
        const filteredQuestion = answeredQuestions.filter(question => question.id === questionId)
        console.log('filteredQuestion ==>',filteredQuestion)


        props.history.push({
            pathname:`/questions/${questionId}/results`,
            state:{filteredQuestion,userName,avatarURL}
        });
    };

    const showViews = (e,questionId,userName,avatarURL) => {
       e.preventDefault();
        const filteredQuestion = unAnsweredQuestions.filter(question => question.id === questionId)
        console.log('filteredQuestion ==>',filteredQuestion)

        props.history.push({
           pathname:`/questions/${questionId}`,
           state:{filteredQuestion,userName,avatarURL}
       });
    };

    //ToDo: make a one Card component and reuse in both answered and unanswered cases
        return (
            <div>
                <Tabs id="uncontrolled-tab-example">
                    <Tab eventKey="answeredQs" title="Answered Questions" defaultactivekey={'answeredQs'}>
                        <ul style={{listStyle:'none',display:"flex", flexWrap:'wrap', justifyContent:'center'}}>
                            {answeredQuestions.map(question=>(
                                <li>
                                    <Card style={{ width: '15rem' ,display:'flex'}}>
                                        <Card.Img variant="top" src={question.userInfo.avatarURL} />
                                        <Card.Body>
                                            <Card.Title>{question.userInfo.name}</Card.Title>
                                            <Card.Text>
                                                <div style={{fontWeight:'normal'}}>...{question.optionOne.text}...</div>
                                                <Button style={{width:'90%'}} variant="outline-success" onClick={(e) => showResults(e,question.id,question.userInfo.name,question.userInfo.avatarURL)}>View Poll</Button>
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
                                    <Card style={{ width: '15rem' ,display:'flex'}}>
                                        <Card.Img variant="top" src={question.userInfo.avatarURL} />
                                        <Card.Body>
                                            <Card.Title>{question.userInfo.name}</Card.Title>
                                            <Card.Text>
                                                <div style={{fontWeight:'normal'}}>...{question.optionOne.text}...</div>
                                                <Button style={{width:'90%'}} variant="outline-primary"  onClick={(e) => showViews(e,question.id,question.userInfo.name,question.userInfo.avatarURL)}>View Poll</Button>
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