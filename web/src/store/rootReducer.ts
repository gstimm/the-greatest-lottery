import { combineReducers } from 'redux';
import Auth from './ducks/auth';
import Bet from './ducks/bet';

export default combineReducers({
  Auth,
  Bet,
});
