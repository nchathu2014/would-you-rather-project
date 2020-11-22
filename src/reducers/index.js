import {combineReducers} from "redux";
import {loggedUser} from "./loggedUser";
import {questions} from "./questions";
import {users} from "./users";
import {loadingBarReducer} from "react-redux-loading";


export const rootReducer = combineReducers({
    users,
    questions,
    loggedUser,
    loadingBar:loadingBarReducer
});
