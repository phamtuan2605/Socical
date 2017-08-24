import { combineReducers } from 'redux';
import login from './login';
import post from './post';
import office from './office';


export default combineReducers({
  login,
  post,
  office
});
