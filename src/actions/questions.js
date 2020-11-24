export const ADD_QUESTIONS_TO_STORE = "ADD_QUESTIONS_TO_STORE";
export const ADD_NEW_QUESTIONS_TO_STORE = "ADD_NEW_QUESTIONS_TO_STORE";

export function addQuestionsToStore(questions){
    return{
        type:ADD_QUESTIONS_TO_STORE,
        questions
    }
}


export function addNewQuestionToStore(newQuestion){
    return{
        type:ADD_NEW_QUESTIONS_TO_STORE,
        newQuestion
    }
}