import { put, all, call, takeEvery, fork } from 'redux-saga/effects';

import { loginSuccess, loginRequest, loginFailure, Types } from '../ducks/auth';
import api from '../../services/api';

export function* handleLogin({ payload }: ReturnType<typeof loginRequest>) {
  try {
    const { data } = yield call(api.post, '/login', payload);
    api.defaults.headers.authorization = `Bearer ${data.token}`;
    yield sessionStorage.setItem('token', data.token);

    yield put(loginSuccess(data.user, data.token));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* handleLogout() {
  yield sessionStorage.removeItem('token');
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
