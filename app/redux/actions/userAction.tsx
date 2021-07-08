import * as Action from '../types';

export const getUserDetails = (isLoadMore?) => {
  return async dispatch => {
    try {
      if(!isLoadMore){
        dispatch(Loading(true));
      }      
      await fetch(`https://randomuser.me/api/?results=10`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(async res => {
          let responseJson = await res.json();
          if (isLoadMore) {
            dispatch(LoadMoreUserData(responseJson.results)); 
          }else{
            dispatch(UserData(responseJson.results));
          }          
        })
        .catch(err => {
          console.log('==err',err)
          dispatch(Failed(err));
        });
    } catch (error) {
      dispatch(Loading(false));
      console.log('====Error', error);
    }
  };
};

export const Loading = loading => ({
  type: Action.USER_LOADING,
  payload: loading,
});

export const UserData = data => ({
  type: Action.USER_SUCCESS,
  payload: data,
});

export const LoadMoreUserData = data => ({
  type: Action.USER_LOADMORE,
  payload: data,
})

export const Failed = error => ({
  type: Action.USER_FAILED,
  payload: error,
});

export const ClearLogin = () => ({
  type: Action.USER_INIT,
});
