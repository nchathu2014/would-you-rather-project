import {ADD_QUESTIONS_TO_STORE} from "../actions/questions";

export function questions(state={},action){

    switch(action.type){
        case ADD_QUESTIONS_TO_STORE:
            return {
                ...state,
                ...action.questions

            };

        default:
            return state;
    }

}