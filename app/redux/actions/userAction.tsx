import * as Action from '../types';

export const getUserDetails = (pageNumber) => {
  return async dispatch => {
    try {
      dispatch(Loading(true));
      fetch(`https://randomuser.me/api/?results=${pageNumber}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(res => console.log('====Response', res))
        .catch(err => console.log('==err', err));
    } catch (error) {
      console.log('====Error', error);
    }
  };
};

export const Loading = loading => ({
  type: Action.USER_LOADING,
  payload: loading,
});

export const LoggedIn = data => ({
  type: Action.USER_SUCCESS,
  payload: data,
});

export const Failed = error => ({
  type: Action.USER_FAILED,
  payload: error,
});

export const ClearLogin = () => ({
  type: Action.USER_INIT,
});