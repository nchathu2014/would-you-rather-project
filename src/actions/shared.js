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
    console.log('@@@@ newQuestion @@@@@',newQuestion)
    return (dispatch, getState)=>{
        const {loggedUser} = getState().loggedUser;
        dispatch(showLoading());
        return _saveQuestion(newQuestion)
            .then((question)=>{
                dispatch(addNewQuestionToStore(question))
                dispatch(updateUserQuestions(loggedUser.id,question.id))
            })
            .then(()=>{
                dispatch(hideLoading())
            })
    }
}

export function saveQuestionAnswer(question,selectOption){

    return (dispatch,getState)=>{

        dispatch(showLoading());
        const {loggedUser} = getState().loggedUser;
        const saveQuestionAnsContract = {
            authedUser:loggedUser.id,
            qid:question.id,
            answer:selectOption,

        }


        return _saveQuestionAnswer({...saveQuestionAnsContract})
            .then(()=>{
                dispatch(updateUserAnswer(loggedUser.id, question.id, selectOption))
                dispatch(updateQuestionAnswer(loggedUser.id, question.id, selectOption))
            })
            .then(()=>{
                dispatch(hideLoading());
            })

    }
}