export const ADD_LOGGED_USER_TO_STORE = "ADD_LOGGED_USER_TO_STORE";
export const REMOVE_LOGGED_USER_FROM_STORE = "REMOVE_LOGGED_USER_FROM_STORE";

export function addLoggedUserToStore(loggedUser){
    return{
        type:ADD_LOGGED_USER_TO_STORE,
        loggedUser
    }
}


export function removeLoggedUserToStore(){
    return{
        type:REMOVE_LOGGED_USER_FROM_STORE
    }
}