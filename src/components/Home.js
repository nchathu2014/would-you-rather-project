import React from "react";
import {Tabs,Tab} from "react-bootstrap";
import WouldYouRatherView from "./WouldYourRatherView";

import {connect} from "react-redux";

const Home = function Home(props){


    console.log('@@@@answeredQuestions@@@@',props.answeredQuestions);
    console.log('!!!!unAnsweredQuestions!!!!',props.unAnsweredQuestions);

        return (
            <div>
                <Tabs defaultActiveKey="unAnsweredQs" id="uncontrolled-tab-example">
                    <Tab eventKey="unAnsweredQs" title="Unanswered Questions">
                        <WouldYouRatherView questions = {props.unAnsweredQuestions}/>
                    </Tab>
                    <Tab eventKey="answeredQs" title="Answered Questions">
                        <WouldYouRatherView questions = {props.answeredQuestions}/>
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
