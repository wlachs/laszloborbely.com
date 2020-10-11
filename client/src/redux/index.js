// Imports
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

// App imports
import common from './reducers/commonReducer';
import projects from './reducers/projectReducer';

// App reducer
const appReducer = combineReducers({
  common,
  projects,
});

// Root reducer
export const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

// Store
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
