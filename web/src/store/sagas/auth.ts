import { put, all, takeEvery, fork } from 'redux-saga/effects';
import {
  loginSuccess,
  loginRequest,
  loginFailure,
  Types,
  User,
} from '../ducks/auth';

export function* handleLogin({ payload }: ReturnType<typeof loginRequest>) {
  try {
    // Unique User Registered
    if (payload.email !== 'test@test.com' || payload.password !== '12345678') {
      console.log('Email or password incorrect');
      return;
    }

    const user: User = {
      name: 'Gabriel Timm',
      email: payload.email,
      password: payload.password,
    };

    yield put(loginSuccess(user, '6b6fd02ad383e3fe66652385aaa15653')); // MD5 HASH
    console.log(user, 'Logged with success.');
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* watchOnHandleLogin() {
  yield takeEvery(Types.LOGIN_REQUEST, handleLogin);
}

export default function* lyricsSaga() {
  yield all([fork(watchOnHandleLogin)]);
}
