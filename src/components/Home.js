import React from "react";
import {Tabs,Tab} from "react-bootstrap";
import connect from "react-redux/es/connect/connect";

const Home = function Home({questions}){

   // const questionList = questionIds.map(questionId => questions[questionId]);
console.log('####',questions)
    const unAnsweredQuestions = questions.filter(question => {
        return question.optionOne.votes.length + question.optionTwo.votes.length  === 0
    });

    const answeredQuestions = questions.filter(question => {
        return question.optionOne.votes.length + question.optionTwo.votes.length  !== 0
    });

        return (
            <div>
                <Tabs id="uncontrolled-tab-example">
                    <Tab eventKey="answeredQs" title="Answered Questions" defaultactivekey={'answeredQs'}>
                        {answeredQuestions.map(question=>(
                            <div>{question.id}</div>
                        ))}
                    </Tab>
                    <Tab eventKey="unAnsweredQs" title="Unanswered Questions">
                        {unAnsweredQuestions.map(question=>(
                            <div>{question.id}</div>
                        ))}
                    </Tab>
                </Tabs>
            </div>
        );

};

export default Home;
