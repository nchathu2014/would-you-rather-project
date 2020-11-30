export const ADD_USERS_TO_STORE = "ADD_USERS_TO_STORE";
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";
export const UPDATE_USER_ANSWER = "UPDATE_USER_ANSWER";

export function addUsersToStore(users){
    return{
        type:ADD_USERS_TO_STORE,
        users,
    }
}

export function updateUserQuestions(userId, questionId){
    return{
        type: UPDATE_USER_QUESTIONS,
        userId,
        questionId,
    }
}

export function updateUserAnswer(authedUser, id, option){
    return{
        type: UPDATE_USER_ANSWER,
        authedUser,
        id,
        option,
    }
}
