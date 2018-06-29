// Import action types
import { ADD_USER } from '../actions/types';

const initialState = {
  msg: ""
};

export default function(state = initialState, action){
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        msg: action.payload,
      };
    default:
    return state;
  }
};
