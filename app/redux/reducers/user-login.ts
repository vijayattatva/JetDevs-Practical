import * as Action from '../types';

const initialState = {
  isLoggedIn: false
};

type Action = {
  type: string;
};

export default function (state = initialState, action: Action) {
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