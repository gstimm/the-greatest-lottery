import { Reducer } from 'redux';

// Action Types

export const Types = {
  ADD_BET_REQUEST: 'bet/ADD_BET_REQUEST',
  ADD_BET_SUCCESS: 'bet/ADD_BET_SUCCESS',
  ADD_BET_FAILURE: 'bet/ADD_BET_FAILURE',
  REMOVE_BET: 'bet/REMOVE_BET',
};

// Data Types

export interface Bet {
  id: string;
  type: string;
  date: string;
  price: number;
  numbers: number[];
  color: string;
}

// State Type

export interface BetState {
  readonly bets: Bet[];
  readonly totalBetValue: number;
  readonly loading: boolean;
  readonly error: string;
}

// Initial State

const initialState: BetState = {
  bets: [],
  totalBetValue: 0,
  loading: false,
  error: '',
};

// Reducer

export const reducer: Reducer<BetState> = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_BET_REQUEST:
      return { ...state, loading: true };

    case Types.ADD_BET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case Types.ADD_BET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        bets: [...state.bets, action.payload.bets],
      };

    case Types.REMOVE_BET:
      return {
        ...state,
        bets: state.bets.filter(bet => bet.id === action.payload.id),
      };

    default:
      return state;
  }
};

// Action Creators

export const addBetRequest = (bets: Bet[]) => {
  return {
    type: Types.ADD_BET_REQUEST,
    payload: {
      bets,
    },
  };
};
export const addBetFailure = (error: string) => {
  return {
    type: Types.ADD_BET_FAILURE,
    payload: { error },
  };
};

export const addBetSuccess = (bets: Bet[]) => {
  return {
    type: Types.ADD_BET_SUCCESS,
    payload: {
      bets,
    },
  };
};

export const removeBet = (id: string) => {
  return {
    type: Types.REMOVE_BET,
    payload: { id },
  };
};

export default reducer;
