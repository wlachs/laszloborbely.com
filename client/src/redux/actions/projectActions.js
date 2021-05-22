// Imports
import axios from 'axios';
import { query } from 'gql-query-builder';
import {
  REQUEST_PROJECT_LIST_ERROR,
  REQUEST_PROJECT_LIST_START,
  REQUEST_PROJECT_LIST_SUCCESS,
} from '../actionTypes/projectActionTypes';
import getCurrentConfiguration, { guestEndpoint } from '../../config';

export function getProjectList() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_PROJECT_LIST_START,
    });

    const configuration = getCurrentConfiguration();
    const requestUri = configuration.serverUri + guestEndpoint;

    axios.post(requestUri, query({
      operation: 'projects',
      fields: ['name', 'description', 'imageLink', 'pageLink'],
    }))
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: REQUEST_PROJECT_LIST_SUCCESS,
            value: response.data.data.projects,
          });
        } else {
          dispatch({
            type: REQUEST_PROJECT_LIST_ERROR,
            value: 'An error occurred, please try again!',
          });
        }
      })
      .catch(() => {
        dispatch({
          type: REQUEST_PROJECT_LIST_ERROR,
          value: 'An error occurred, please try again!',
        });
      });
  };
}

export function sample() {
  return (dispatch) => {
    dispatch({
      type: 'REQUEST_START',
    });

    axios.post('requestUri', 'query')
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: 'REQUEST_SUCCESS',
          });
        } else {
          dispatch({
            type: 'REQUEST_ERROR',
          });
        }
      })
      .catch(() => {
        dispatch({
          type: 'REQUEST_ERROR',
        });
      });
  };
}
