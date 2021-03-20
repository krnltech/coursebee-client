import { CHANGE_TO_BANGLA, CHANGE_TO_ENGLISH } from "../types";

export const changeToBangla = () => (dispatch) => {
  dispatch({
    type: CHANGE_TO_BANGLA,
  });
};

export const changeToEnglish = () => (dispatch) => {
    dispatch({
      type: CHANGE_TO_ENGLISH,
    });
  };