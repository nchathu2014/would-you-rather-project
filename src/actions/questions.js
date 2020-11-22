export const ADD_QUESTIONS_TO_STORE = "ADD_QUESTIONS_TO_STORE";


export function addQuestionsToStore(questions){
    return{
        type:ADD_QUESTIONS_TO_STORE,
        questions
    }
}
