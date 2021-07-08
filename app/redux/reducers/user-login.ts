import * as Action from '../types';

const initialState = {
  isLoggedIn: false
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case Action.IS_USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
}