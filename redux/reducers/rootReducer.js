import { combineReducers } from "redux";
import languageReducer from '../reducers/languageReducer';

export default combineReducers({
    language:languageReducer
})