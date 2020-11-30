import {ADD_USERS_TO_STORE, UPDATE_USER_ANSWER, UPDATE_USER_QUESTIONS} from "../actions/users";

export function users(state={},action){

    switch(action.type){
        case ADD_USERS_TO_STORE:
            return {
                ...state,
                ...action.users
            };

        case UPDATE_USER_QUESTIONS:
            return{
                ...state,
                [action.userId]:{
                    ...state[action.userId],
                    questions: state[action.userId].questions.concat([action.questionId])
                }
            };

        case UPDATE_USER_ANSWER:
            return{
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].option,
                        [action.id]: action.authedUser,
                    },
                },
            };

        default:
            return state;
    }

}