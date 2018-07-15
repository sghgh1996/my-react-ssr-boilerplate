import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

// Divide reducers into different files
export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
});
