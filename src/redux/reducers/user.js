// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_ACTION } from '../actions';

const INITIAL_STATE = {
  user: {},
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_ACTION: return {
    ...state,
    // ...action.payload,
    email: action.payload.email,
    // email: action.payload.email, com email no inital state
  };
  default:
    return state;
  }
}

export default userReducer;
