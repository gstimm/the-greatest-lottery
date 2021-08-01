import { type } from 'os';
import { Reducer } from 'redux';

// Action Types

export const Types = {
  ADD_BET_REQUEST: 'bet/ADD_BET_REQUEST',
  ADD_BET_SUCCESS: 'bet/ADD_BET_SUCCESS',
  ADD_BET_FAILURE: 'bet/ADD_BET_FAILURE',
  GET_BET_REQUEST: 'bet/GET_BET_REQUEST',
  GET_BET_SUCCESS: 'bet/GET_BET_SUCCESS',
  GET_BET_FAILURE: 'bet/GET_BET_FAILURE',
  FIRST_GET: 'bet/FIRST_GET',
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
  readonly page: number;
}

// Initial State

const initialState: BetState = {
  bets: [],
  loading: false,
  error: '',
  page: 1,
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
        bets: [...state.bets, action.payload.bet],
        // bets: [], // Clear Recent Bets
      };
    case Types.GET_BET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_BET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case Types.GET_BET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        bets: [...state.bets, ...action.payload.bet],
        // bets: [], // Clear Recent Bets
        page: action.payload.page,
      };

    case Types.FIRST_GET:
      return {
        ...state,
        bets: [...state.bets, ...action.payload.bets],
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

export const getBetRequest = (page: number, total: number) => {
  return {
    type: Types.GET_BET_REQUEST,
    payload: {
      page,
      total,
    },
  };
};
export const getBetFailure = (error: string) => {
  return {
    type: Types.GET_BET_FAILURE,
    payload: { error },
  };
};

export const getBetSuccess = (bet: Bet, page: number) => {
  return {
    type: Types.GET_BET_SUCCESS,
    payload: {
      bet,
      page,
    },
  };
};

export const firstGet = (bets: Bet[]) => {
  return {
    type: Types.FIRST_GET,
    payload: { bets },
  };
};

export default reducer;
