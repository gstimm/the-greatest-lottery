import { Reducer } from 'redux';
import { Bet, NewBet } from '../../interfaces';

// Action Types

export const Types = {
  ADD_BET_REQUEST: 'bet/ADD_BET_REQUEST',
  ADD_BET_SUCCESS: 'bet/ADD_BET_SUCCESS',
  ADD_BET_FAILURE: 'bet/ADD_BET_FAILURE',
  GET_BET_REQUEST: 'bet/GET_BET_REQUEST',
  GET_BET_SUCCESS: 'bet/GET_BET_SUCCESS',
  GET_BET_FAILURE: 'bet/GET_BET_FAILURE',
  CLEAR_RECENT_BETS: 'bet/CLEAR_RECENT_BETS',
};

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
      };

    case Types.GET_BET_REQUEST:
      return {
        ...state,
        loading: true,
      };

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
        page: action.payload.page + 1,
        bets: [...state.bets, ...action.payload.bets],
      };

    case Types.CLEAR_RECENT_BETS:
      return {
        bets: [],
        loading: false,
        error: '',
        page: 1,
      };

    default:
      return state;
  }
};

// Action Creators

export const addBetRequest = (bets: NewBet[]) => {
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

export const addBetSuccess = () => {
  return {
    type: Types.ADD_BET_SUCCESS,
  };
};

export const getBetRequest = (page: number) => {
  return {
    type: Types.GET_BET_REQUEST,
    payload: {
      page,
    }
  };
};

export const getBetFailure = (error: string) => {
  return {
    type: Types.GET_BET_FAILURE,
    payload: { error },
  };
};

export const getBetSuccess = (bets: Bet[], page: number) => {
  return {
    type: Types.GET_BET_SUCCESS,
    payload: {
      bets,
      page
    },
  };
};

export const clearRecentBets = () => {
  return {
    type: Types.CLEAR_RECENT_BETS,
  };
};

export default reducer;
