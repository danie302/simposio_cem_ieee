// Dependencies
import {combineReducers } from 'redux';

import userReducer from './userReducer';
import formReducer from './formReducer';

export default combineReducers({
  response: userReducer,
  info: formReducer,
});
