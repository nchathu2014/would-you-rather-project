export const ADD_USERS_TO_STORE = "ADD_USERS_TO_STORE";


export function addUsersToStore(users){
    return{
        type:ADD_USERS_TO_STORE,
        users
    }
}
