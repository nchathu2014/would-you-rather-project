import {_getQuestions, _getUsers, _saveQuestion} from "../utils/_DATA";
import {showLoading, hideLoading} from "react-redux-loading";
import {addUsersToStore, updateUserQuestions} from "./users";
import {addNewQuestionToStore, addQuestionsToStore} from "./questions";

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
    return (dispatch)=>{
        dispatch(showLoading());
        return _saveQuestion(newQuestion)
            .then((question)=>{
                dispatch(addNewQuestionToStore(question))
                dispatch(updateUserQuestions(question.author,question.id))
            })
            .then(()=>{
                dispatch(hideLoading())
            })
    }

}