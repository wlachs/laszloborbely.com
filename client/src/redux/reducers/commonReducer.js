import {
  REQUEST_API_TOKEN_ERROR,
  REQUEST_API_TOKEN_START,
  REQUEST_API_TOKEN_SUCCESS,
} from '../actionTypes/commonActionTypes';

const commonInitialState = {
  apiToken: null,
  error: null,
  loading: false,
};

export default (state = commonInitialState, action) => {
  switch (action.type) {
    case REQUEST_API_TOKEN_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case REQUEST_API_TOKEN_SUCCESS:
      return {
        ...state,
        apiToken: action.value,
        error: null,
        loading: false,
      };
    case REQUEST_API_TOKEN_ERROR:
      return {
        ...state,
        error: action.value,
        loading: false,
      };
    default:
      return state;
  }
};
