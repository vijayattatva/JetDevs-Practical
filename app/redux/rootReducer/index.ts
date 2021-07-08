import userReducer from '../reducers/userReducer';
import userLoginReducer from '../reducers/user-login';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  Register: userReducer,
  UserLogin: userLoginReducer,
});

export default rootReducer;
