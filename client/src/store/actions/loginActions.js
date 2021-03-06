import axios from 'axios';

import {
  LOGIN_START,
  CLEAR_LOGIN_INPUTS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './types';

import { baseURL } from '.';

export const clearLoginInputs = () => dispatch =>
  dispatch({ type: CLEAR_LOGIN_INPUTS });

export const login = (username, password) => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post(`${baseURL}/login`, { username, password })
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

export const logout = () => dispatch => dispatch({ type: LOGOUT });
