import React from "react";
import {Tabs,Tab} from "react-bootstrap";
import WouldYouRatherView from "./WouldYourRatherView";

import {connect} from "react-redux";

const Home = function Home(props){


    console.log('@@@@answeredQuestions@@@@',props.answeredQuestions);
    console.log('!!!!unAnsweredQuestions!!!!',props.unAnsweredQuestions);

        return (
            <div>
                <Tabs id="uncontrolled-tab-example">
                    <Tab eventKey="answeredQs" title="Answered Questions" defaultActiveKey="answeredQs">
                        <WouldYouRatherView
                            questions = {props.answeredQuestions}
                            mode = {'result'}
                        />
                    </Tab>
                    <Tab eventKey="unAnsweredQs" title="Unanswered Questions">
                        <WouldYouRatherView
                            questions = {props.unAnsweredQuestions}
                            mode = {'view'}
                        />
                    </Tab>
                </Tabs>
            </div>
        );

};

function mapStateToProps({questions},{questionIds}) {
    //console.log('!!!!!!questionIds!!!!!1',questionIds);
    //console.log('!!!!!!questions!!!!!1',questions);

    const questionList = questionIds.map(questionId => questions[questionId]);

    const unAnsweredQuestions = questionList.filter(question => {
       return question.optionOne.votes.length + question.optionTwo.votes.length  === 0
    });

    const answeredQuestions = questionList.filter(question => {
        return question.optionOne.votes.length + question.optionTwo.votes.length  !== 0
    });

    return{
        unAnsweredQuestions,
        answeredQuestions
}
}

export default connect(mapStateToProps)(Home);
