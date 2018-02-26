import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';

import ble from 'flux/ble/bleReducer';

const reducer = combineReducers({
  ble, // bluetooth manager
});

const middlewares = [thunkMiddleware];

if (__DEV__) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

export default store;
