import { combineReducers } from "redux";
import languageReducer from '../reducers/languageReducer';
import authReducer from "./authReducer";

export default combineReducers({
    language:languageReducer,
    auth : authReducer
})