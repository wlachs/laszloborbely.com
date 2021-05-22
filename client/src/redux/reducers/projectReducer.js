import {
  REQUEST_PROJECT_LIST_ERROR,
  REQUEST_PROJECT_LIST_START,
  REQUEST_PROJECT_LIST_SUCCESS,
} from '../actionTypes/projectActionTypes';

const projectInitialState = {
  error: null,
  loading: false,
  projectList: [],
};

export default (state = projectInitialState, action) => {
  switch (action.type) {
    case REQUEST_PROJECT_LIST_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case REQUEST_PROJECT_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        projectList: action.value,
      };
    case REQUEST_PROJECT_LIST_ERROR:
      return {
        ...state,
        error: action.value,
        loading: false,
      };
    default:
      return state;
  }
};
