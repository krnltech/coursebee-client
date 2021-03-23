import {SET_CURRENT_USER,GET_ERRORS} from "../types";
// import axios from 'axios';
import jwt_decode from "jwt-decode";

import client from '../../axios/axios'

export const RegisterMentor = (userData, history) => dispatch => {
    client.post(`/api/mentor/register`,userData)
        .then(res => {
            history.push('/verifyemail',res.data)
        })
        .catch(err => {
            dispatch ({
                type: GET_ERRORS,
                payload : err.response.data
            })
        })
}

export const loginMentor = ( userData ) => (dispatch) => {
    dispatch({
        type : SET_CURRENT_USER,
        payload : userData
    })
}