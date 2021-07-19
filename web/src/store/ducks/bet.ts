import { Reducer } from 'redux';

// Action Types

export const Types = {
  ADD_BET_REQUEST: 'bet/ADD_BET_REQUEST',
  ADD_BET_SUCCESS: 'bet/ADD_BET_SUCCESS',
  ADD_BET_FAILURE: 'bet/ADD_BET_FAILURE',
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
  readonly loading: boolean;
  readonly error: string;
}

// Initial State

const initialState: BetState = {
  bets: [],
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
        // bets: [...state.bets, action.payload.bet],
        bets: [], // Clear Recent Bets
      };

    default:
      return state;
  }
};

// Action Creators

export const addBetRequest = (bet: Bet) => {
  return {
    type: Types.ADD_BET_REQUEST,
    payload: {
      bet,
    },
  };
};
export const addBetFailure = (error: string) => {
  return {
    type: Types.ADD_BET_FAILURE,
    payload: { error },
  };
};

export const addBetSuccess = (bet: Bet) => {
  return {
    type: Types.ADD_BET_SUCCESS,
    payload: {
      bet,
    },
  };
};

export default reducer;
