// Import action types
import { TYPING } from '../actions/types';

const initialState = {
  info: {
    User: '',
    Name: '',
    Email: '',
    Password: '',
  },
};

export default function(state = initialState, action){
  switch (action.type) {
    case TYPING:
      return {
        ...state,
        info: action.payload,
      };
    default:
    return state;
  }
};
