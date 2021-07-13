import { Reducer } from 'redux';

// Action Types

export const Types = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
  LOGOUT: 'auth/LOGOUT',
};

// Data Types

export interface User {
  name: string;
  email: string;
  password: string;
}

// State Type

export interface AuthState {
  readonly isLogged: boolean;
  readonly token: string;
  readonly user: User;
  readonly loading: boolean;
  readonly error: string;
}

// Initial State

const initialState: AuthState = {
  isLogged: false,
  token: '',
  user: {} as User,
  loading: false,
  error: '',
};

// Reducer

export const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: {} as User,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        user: action.payload.user,
        token: action.payload.token,
        isLogged: true,
      };
    case Types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

// Action Creators

export const loginRequest = (email: string, password: string) => {
  return {
    type: Types.LOGIN_REQUEST,
    payload: {
      email,
      password,
    },
  };
};

export const loginFailure = (error: string) => {
  return {
    type: Types.LOGIN_FAILURE,
    payload: {
      error,
    },
  };
};

export const loginSuccess = (user: User, token: string) => {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: {
      user,
      token,
    },
  };
};

export const logout = () => {
  return {
    type: Types.LOGOUT,
  };
};

export default reducer;
