import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";
import {showLoading, hideLoading} from "react-redux-loading";
import {addUsersToStore, updateUserAnswer, updateUserQuestions} from "./users";
import {addNewQuestionToStore, addQuestionsToStore, updateQuestionAnswer} from "./questions";

export function getUsersFromBE() {
    return (dispatch) => {
        dispatch(showLoading());
        return _getUsers()
            .then((users)=>{
                dispatch(addUsersToStore(users))
            })
            .then(()=>{
                dispatch(hideLoading())
            })
    }
}

export function getQuestionsFromBE() {
    return (dispatch) => {
        dispatch(showLoading());
        return _getQuestions()
            .then((questions)=>{
                dispatch(addQuestionsToStore(questions))
            })
            .then(()=>{
                dispatch(hideLoading())
            })
    }
}

export function saveNewQuestionToBE(newQuestion){
    return (dispatch, getState)=>{
        dispatch(showLoading());
        return _saveQuestion(newQuestion)
            .then((question)=>{
                dispatch(addNewQuestionToStore(question))
                dispatch(updateUserQuestions(getState().loggedUser,question.id))
            })
            .then(()=>{
                dispatch(hideLoading())
            })
    }
}

export function saveQuestionAnswer(question,selectOption){

    return (dispatch,getState)=>{

        //dispatch(showLoading());

        const test = {
            authedUser:getState().loggedUser,
            qid:question.id,
            answer:selectOption,

        }
        console.log('######## test ##########',test)

        return _saveQuestionAnswer({...test})
            .then(()=>{
                dispatch(updateUserAnswer(getState().loggedUser, question.id, selectOption))
                dispatch(updateQuestionAnswer(getState().loggedUser, question.id, selectOption))
            })

    }
}