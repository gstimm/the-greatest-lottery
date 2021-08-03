import { Reducer } from 'redux';
import { Bet } from '../../interfaces';

// Action Types

export const Types = {
  ADD_BET: 'cart/ADD_BET',
  REMOVE_BET: 'cart/REMOVE_BET',
};

// State Type

export interface CartState {
  readonly bets: Bet[];
  readonly totalBetValue: number;
}

// Initial State

const initialState: CartState = {
  bets: [],
  totalBetValue: 0,
};

// Reducer

export const reducer: Reducer<CartState> = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_BET:
      return {
        ...state,
        bets: [...state.bets, action.payload.bet],
        totalBetValue: state.totalBetValue + action.payload.bet.price,
      };

    case Types.REMOVE_BET:
      return {
        ...state,
        bets: state.bets.filter(bet => bet.id !== action.payload.id),
        totalBetValue: state.totalBetValue - action.payload.price,
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

export default reducer;
