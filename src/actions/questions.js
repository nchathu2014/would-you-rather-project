import {REMOVE_LOGGED_USER_FROM_STORE} from "./loggedUser";

export const ADD_QUESTIONS_TO_STORE = "ADD_QUESTIONS_TO_STORE";
export const ADD_NEW_QUESTIONS_TO_STORE = "ADD_NEW_QUESTIONS_TO_STORE";
export const UPDATE_QUESTION_ANSWER = "UPDATE_QUESTION_ANSWER";
export const REMOVE_QUESTIONS_FROM_STORE = "REMOVE_QUESTIONS_FROM_STORE";

export function addQuestionsToStore(questions){
    return{
        type:ADD_QUESTIONS_TO_STORE,
        questions
    }
}


export function addNewQuestionToStore(newQuestion){
    return{
        type:ADD_NEW_QUESTIONS_TO_STORE,
        newQuestion
    }
}

export function updateQuestionAnswer(authedUser, id, option){
    return{
        type: UPDATE_QUESTION_ANSWER,
        authedUser,
        id,
        option,
    }
}

export function removeQuestionsFromStore(){
    return{
        type: REMOVE_QUESTIONS_FROM_STORE,
    }
}