import React, {Component} from 'react';
import {connect} from "react-redux";
import View from "./View";
import Results from "./Results";
import PageNotFound from "./PageNotFound";

class ViewComponent extends Component {

    render() {

        const {question, author, pageNotFound, isVoted, loggedUser} = this.props;
        const {name, avatarURL} = author;

        if (pageNotFound === true) {
            return <PageNotFound/>;
        }

        const props = {
            name,
            avatarURL,
            question
        };

        return (
            <section>
                {!isVoted ? <View {...props}/> : <Results {...props} loggedUser={loggedUser}/>}
            </section>
        )
    }
}

function mapStateToProps({loggedUser, questions, users, match}, props) {

    let pageNotFound = true;
    const {id} = props.match.params;
    let specificQuestion = "";
    let author = "";
    let isVoted = "";

    if (questions[id] !== undefined) {
        pageNotFound = false;
        specificQuestion = questions[id];
        author = users[specificQuestion["author"]];

        const votes = specificQuestion.optionOne.votes.concat(specificQuestion.optionTwo.votes);
        isVoted = votes.includes(loggedUser.loggedUser.id);
    }

    return {
        id,
        loggedUser,
        question: specificQuestion,
        author: author,
        pageNotFound: pageNotFound,
        isVoted,
    }
}

export default connect(mapStateToProps)(ViewComponent);