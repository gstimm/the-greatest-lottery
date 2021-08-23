import { put, all, call, takeEvery, fork } from 'redux-saga/effects';
import {
  loginSuccess,
  loginRequest,
  loginFailure,
  Types,
  clearPersistedAuth,
} from '../ducks/auth';
import api from '../../services/api';
import { clearRecentBets } from '../ducks/bet';
import { clearCart } from '../ducks/cart';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeToken(token: any) {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
}

async function removeToken() {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.log('AsyncStorage error during token remove:', error);
  }
}

function* handleLogin({ payload }: ReturnType<typeof loginRequest>) {
  try {
    const { data: userInfo } = yield call(api.post, '/login', payload);
    api.defaults.headers.Authorization = `Bearer ${userInfo.token}`;
    yield call(storeToken, userInfo.token)

    yield put(loginSuccess(userInfo.user, userInfo.token));
  } catch (error) {
    yield put(loginFailure(error.response.data.error.message));
    yield put(clearPersistedAuth());
  }
}

function* handleLogout() {
  try {
    yield put(clearRecentBets());
    yield put(clearCart());
    yield call(removeToken);
  } catch (error) {
    if (error.response) {
      yield put(loginFailure(error.response.data.error.message));
    }
  }
}

function* watchOnHandleLogout() {
  yield takeEvery(Types.LOGOUT, handleLogout);
}

function* watchOnHandleLogin() {
  yield takeEvery(Types.LOGIN_REQUEST, handleLogin);
}

export default function* lyricsSaga() {
  yield all([fork(watchOnHandleLogin), fork(watchOnHandleLogout)]);
}
