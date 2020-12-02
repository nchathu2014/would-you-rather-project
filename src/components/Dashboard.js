import React,{Component} from "react";
import {Tabs,Tab, Card,Button} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";
import * as _ from "lodash";
import {withRouter} from "react-router-dom";
import {getQuestionsFromBE, getUsersFromBE} from "../actions/shared";



class Dashboard extends Component{

    componentDidMount() {
        this.props.dispatch(getQuestionsFromBE());
    }

    render(){
        const {questions,users,loggedUser} = this.props;
         questions.map(question => {
            return question['userInfo'] = users[question.author]
        });


                const answeredQuestions = questions.filter(question => {
                    const votes = question.optionOne.votes.concat(question.optionTwo.votes);
                    return votes.includes(loggedUser.id) === true
                });

                const unAnsweredQuestions = questions.filter(question => {
                    const votes = question.optionOne.votes.concat(question.optionTwo.votes);
                    return votes.includes(loggedUser.id) === false
                });



                        const unAnsweredQuestionsSorted = _.orderBy(unAnsweredQuestions, ['timestamp'],['desc']);

                        const showResults = (e,questionId,userName,avatarURL) => {

                            e.preventDefault();
                            const filteredQuestion = answeredQuestions.filter(question => question.id === questionId)
                            //console.log('filteredQuestion ==>',filteredQuestion)


                            this.props.history.push({
                                pathname:`/questions/${questionId}/results`,
                                state:{filteredQuestion,userName,avatarURL}
                            });
                        };



        const showViews = (e,questionId,userName,avatarURL) => {
            e.preventDefault();
            const filteredQuestion = unAnsweredQuestions.filter(question => question.id === questionId)
            //console.log('filteredQuestion ==>',filteredQuestion)

            this.props.history.push({
                pathname:`/questions/${questionId}`,
                state:{filteredQuestion,userName,avatarURL}
            });
        };


            return (
            <div style={{margin:"5px 0"}}>
               <Tabs id="uncontrolled-tab-example" defaultActiveKey="unAnsweredQs">
                    <Tab eventKey="answeredQs" title="Answered Questions" style={{marginTop:30}}>
                        <ul style={{listStyle:'none',display:"flex", flexWrap:'wrap', justifyContent:'center'}}>
                            {answeredQuestions.map(question=>(
                                <li key={question.id}>
                                    <Card style={{ width: '15rem',height: "100%",textAlign:'center'}} >
                                        <Card.Img variant="top" src={question.userInfo.avatarURL} />
                                        <Card.Body style={{background: question.author === loggedUser.id?'#D5F5E3':'#fff'}}>
                                            <Card.Title>{question.userInfo.name}</Card.Title>
                                            <Card.Text>
                                                <div style={{fontWeight:'normal',height:48}}>...{question.optionOne.text}...</div>
                                                <Button style={{width:'90%',margin:0}} variant="outline-success" onClick={(e) => showResults(e,question.id,question.userInfo.name,question.userInfo.avatarURL)}>View Poll</Button>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    </Tab>
                    <Tab eventKey="unAnsweredQs" title="Unanswered Questions" style={{marginTop:30}}>
                        <ul style={{listStyle:'none',display:"flex", flexWrap:'wrap', justifyContent:'center'}}>
                            {unAnsweredQuestionsSorted.map(question=>(
                                <li key={question.id}>
                                    <Card style={{ width: '15rem' ,height: "100%",textAlign:'center'}}>
                                        <Card.Img variant="top" src={question.userInfo.avatarURL} />
                                        <Card.Body style={{background: question.author === loggedUser.id?'#D5F5E3':'#fff'}}>
                                            <Card.Title>{question.userInfo.name}</Card.Title>
                                            <Card.Text>
                                                <div style={{fontWeight:'normal',height:48}}>...{question.optionOne.text}...</div>
                                                <Button style={{width:'90%',margin:0}} variant="outline-primary"  onClick={(e) => showViews(e,question.id,question.userInfo.name,question.userInfo.avatarURL)}>View Poll</Button>
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


    }

    //ToDo: make a one Card component and reuse in both answered and unanswered cases


};


function mapStateToProps({users,questions,loggedUser}) {
    return{
       users,
        questions: Object.keys(questions).map(questionId => questions[questionId]),
        loggedUser
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard));
//export default Home;