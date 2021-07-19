import { toast } from 'react-toastify';
import { put, all, takeLatest } from 'redux-saga/effects';
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
      toast.error('Email or password incorrect');
      return;
    }

    const user: User = {
      name: 'Gabriel Timm',
      email: payload.email,
      password: payload.password,
    };

    yield put(loginSuccess(user, '6b6fd02ad383e3fe66652385aaa15653')); // MD5 HASH
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export default function* watchOnHandleLogin() {
  yield all([takeLatest(Types.LOGIN_REQUEST, handleLogin)]);
}
