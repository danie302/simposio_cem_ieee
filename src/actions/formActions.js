// Import action types
import { TYPING } from './types';

export const typingData = (formData) => dispatch => dispatch ({
  type: TYPING,
  payload: formData,
});
