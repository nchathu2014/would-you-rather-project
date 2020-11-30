import {
    ADD_NEW_QUESTIONS_TO_STORE,
    ADD_QUESTIONS_TO_STORE,
    UPDATE_QUESTION_ANSWER} from "../actions/questions";

export function questions(state = {},action){

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

        case UPDATE_QUESTION_ANSWER:
               return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.option]: {
                        ...state[action.id][action.option],
                        votes: state[action.id][action.option]
                            .votes.concat([action.authedUser]),
                    },
                },
            };

        default:
            return state;
    }

}