import {ADD_USERS_TO_STORE} from "../actions/users";

export function users(state={},action){

    switch(action.type){
        case ADD_USERS_TO_STORE:
            return {
                ...state,
                ...action.users
            };

        default:
            return state;
    }

}