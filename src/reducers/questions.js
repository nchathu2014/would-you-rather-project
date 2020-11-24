import {ADD_NEW_QUESTIONS_TO_STORE, ADD_QUESTIONS_TO_STORE} from "../actions/questions";

export function questions(state={},action){

    switch(action.type){
        case ADD_QUESTIONS_TO_STORE:
            return {
                ...state,
                ...action.questions

            };

        case ADD_NEW_QUESTIONS_TO_STORE:
            return{
                ...state,
                [action.newQuestion.id]:{
                    ...state[action.newQuestion.id],
                    ...action.newQuestion
                }
            };

        default:
            return state;
    }

}