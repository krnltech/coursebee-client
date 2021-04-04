import {SET_CURRENT_USER} from "../types";
import isEmpty from "is-empty"

const initialState = {
    user : {}
}

const authReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_CURRENT_USER :
            return {
                ...state,
                isAuthenticated : !isEmpty(action.payload),
                user : action.payload
            }
        default :
            return state;
    }
}

export default authReducer;