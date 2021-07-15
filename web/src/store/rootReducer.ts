import { combineReducers } from 'redux';
import Auth from './ducks/auth';
import Bet from './ducks/bet';
import Cart from './ducks/cart';

export default combineReducers({
  Auth,
  Bet,
  Cart,
});
