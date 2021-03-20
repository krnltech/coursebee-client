import { CHANGE_TO_BANGLA, CHANGE_TO_ENGLISH } from "../types";

const initialState = {
  isBangla: true,
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TO_ENGLISH:
      return {
        ...state,
        isBangla: false,
      };
    case CHANGE_TO_BANGLA:
      return {
        ...state,
        isBangla: true,
      };
    default:
      return state;
  }
};

export default languageReducer;
