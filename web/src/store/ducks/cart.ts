import { Reducer } from 'redux';
import { Bet } from '../../interfaces';

// Action Types

export const Types = {
  ADD_BET: 'cart/ADD_BET',
  REMOVE_BET: 'cart/REMOVE_BET',
  CLEAR_CART: 'cart/CLEAR_CART',
};

// State Type

export interface CartState {
  readonly cartBets: Bet[];
  readonly totalBetValue: number;
}

// Initial State

const initialState: CartState = {
  cartBets: [],
  totalBetValue: 0,
};

// Reducer

export const reducer: Reducer<CartState> = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_BET:
      return {
        ...state,
        cartBets: [...state.cartBets, action.payload.bet],
        totalBetValue: state.totalBetValue + action.payload.bet.price,
      };

    case Types.REMOVE_BET:
      return {
        ...state,
        cartBets: state.cartBets.filter(
          bet => bet !== state.cartBets[action.payload.id],
        ),
        totalBetValue: state.cartBets
          .filter(bet => bet !== state.cartBets[action.payload.id])
          .reduce((accumulator, current) => {
            return accumulator + current.price;
          }, 0),
      };

    case Types.CLEAR_CART:
      return {
        cartBets: [],
        totalBetValue: 0,
      };

    default:
      return state;
  }
};

// Action Creators

export const addBet = (bet: Bet) => {
  return {
    type: Types.ADD_BET,
    payload: {
      bet,
    },
  };
};

export const removeBet = (id: number, price: number) => {
  return {
    type: Types.REMOVE_BET,
    payload: { id, price },
  };
};

export const clearCart = () => {
  return {
    type: Types.CLEAR_CART,
  };
};

export default reducer;
