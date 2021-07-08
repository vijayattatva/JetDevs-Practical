import * as Action from '../types';

const initialState = {
  userErr: '',
  isLoading: false,
  userList: [] as any,
  userLoadMore: false,
};

export default function (state = initialState, action) {
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
