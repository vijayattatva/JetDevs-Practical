import * as Action from '../types';

const initialState = {
  userErr: '',
  isLoading: false,
  userList: [],
  userLoadMore: false,
};

type Action = {
  type: string;
  payload: object;
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case Action.USER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Action.USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userList: action.payload,
        userErr: '',
        userLoadMore: false,
      };
    case Action.USER_FAILED:
      return {
        ...state,
        isLoading: false,
        userErr: action.payload,
      };
    case Action.USER_INIT:
      return {
        ...state,
        isLoading: false,
        userList: [],
        userErr: '',
        userLoadMore: false
      };
    case Action.USER_LOADMORE:
      return {
        ...state,
        isLoading: false,
        userList: action.payload,
        userErr: '',
        userLoadMore: true
      };
    default:
      return state;
  }
}
