import {_getUsers} from "../utils/_DATA";
import {showLoading, hideLoading} from "react-redux-loading";
import {addUsersToStore} from "./users";

export function getUsersFromBE() {
    return (dispatch) => {
        dispatch(showLoading());
        return _getUsers()
            .then((users)=>{
                dispatch(addUsersToStore(users))
            })
            .then(()=>{
                dispatch(hideLoading())
            })
    }
}