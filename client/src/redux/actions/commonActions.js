import axios from 'axios';
import {
  REQUEST_API_TOKEN_ERROR,
  REQUEST_API_TOKEN_START,
  REQUEST_API_TOKEN_SUCCESS,
  RESET,
} from '../actionTypes/commonActionTypes';
import getCurrentConfiguration, { authEndpoint } from '../../config';

export function sendTokenRequest(email, password) {
  return (dispatch) => {
    dispatch({
      type: REQUEST_API_TOKEN_START,
    });

    const configuration = getCurrentConfiguration();
    const requestUri = configuration.serverUri + authEndpoint;

    axios.post(requestUri, {
      email,
      password,
    })
      .then((response) => {
        if (response.status === 202) {
          dispatch({
            type: REQUEST_API_TOKEN_SUCCESS,
            value: response.data.token,
          });
        } else {
          dispatch({
            type: REQUEST_API_TOKEN_ERROR,
            value: 'Incorrect username or password!',
          });
        }
      })
      .catch(() => {
        dispatch({
          type: REQUEST_API_TOKEN_ERROR,
          value: 'An error occurred, please try again!',
        });
      });
  };
}

export function reset() {
  return (dispatch) => {
    dispatch({
      type: RESET,
    });
  };
}
