import { put, all, takeEvery, fork } from 'redux-saga/effects';
import { loginSuccess, loginRequest, loginFailure, Types } from '../ducks/auth';

interface User {
  name: string;
  email: string;
  password: string;
}

export function* handleLogin({ payload }: ReturnType<typeof loginRequest>) {
  try {
    const user: User = {
      name: 'Timm',
      email: payload.email,
      password: '12345678',
    };

    yield put(loginSuccess(user, '5456465645da465sd46a465ad'));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}
function* watchOnHandleLogin() {
  yield takeEvery(Types.LOGIN_REQUEST, handleLogin);
}

export default function* lyricsSaga() {
  yield all([fork(watchOnHandleLogin)]);
}
