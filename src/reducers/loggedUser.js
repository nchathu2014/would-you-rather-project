import {
    ADD_LOGGED_USER_TO_STORE,
    REMOVE_LOGGED_USER_FROM_STORE} from "../actions/loggedUser";

export function loggedUser(state=null,action){
    switch(action.type){
        case ADD_LOGGED_USER_TO_STORE:
            return action.loggedUser

        case REMOVE_LOGGED_USER_FROM_STORE:
            return null;

        default:
            return state;
    }
}