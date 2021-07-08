import * as Action from '../types';

const initialState = {
  userErr: '',
  isLoading: false,
  userData: [],
  isLoggedIn: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Action.USER_LOADING:
      return {
        ...state,
        userData: '',
        isLoading: action.payload,
      };
    case Action.USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
        userErr: '',
      };
    case Action.USER_FAILED:
      return {
        ...state,
        isLoading: false,
        userData: [],
        userErr: action.payload,
      };
    case Action.USER_INIT:
      return {
        ...state,
        isLoading: false,
        userData: [],
        userErr: '',
      };
    case Action.IS_USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
}