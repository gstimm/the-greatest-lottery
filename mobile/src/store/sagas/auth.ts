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

function* handleLogin({ payload }: ReturnType<typeof loginRequest>) {
  try {
    const { data: userInfo } = yield call(api.post, '/login', payload);
    api.defaults.headers.Authorization = `Bearer ${userInfo.token}`;
    yield sessionStorage.setItem('token', userInfo.token);

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
    yield sessionStorage.removeItem('token');
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
