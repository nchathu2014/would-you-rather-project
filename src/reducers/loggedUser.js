import {
    ADD_LOGGED_USER_TO_STORE,
    REMOVE_LOGGED_USER_FROM_STORE} from "../actions/loggedUser";

export function loggedUser(state = {} , action){
    const { authenticated, loggedUser } = action;
    switch(action.type){
        case ADD_LOGGED_USER_TO_STORE:
            return {
                ...state,
                authenticated,
                loggedUser,
            };

        case REMOVE_LOGGED_USER_FROM_STORE:
            return {
                ...state,
                authenticated,
                loggedUser,
            };

        default:
            return state;
    }
}