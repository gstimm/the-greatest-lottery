import { put, all, call, takeEvery, fork } from 'redux-saga/effects';

import {
  loginSuccess,
  loginRequest,
  loginFailure,
  Types,
  clearPersistedAuth,
} from '../ducks/auth';
import api from '../../services/api';
import { Bet, LongBetData } from '../../interfaces';
import { clearRecentBets, getBetSuccess } from '../ducks/bet';
import { clearCart } from '../ducks/cart';

function* handleLogin({ payload }: ReturnType<typeof loginRequest>) {
  try {
    const { data: userInfo } = yield call(api.post, '/login', payload);
    api.defaults.headers.Authorization = `Bearer ${userInfo.token}`;
    yield sessionStorage.setItem('token', userInfo.token);

    yield put(loginSuccess(userInfo.user, userInfo.token));

    const { data: allBets } = yield call(api.get, `/bets`);

    const bets: Bet[] = allBets.map((bet: LongBetData) => {
      return {
        id: bet.id,
        type: bet.game.type,
        color: bet.color,
        date: bet.created_at,
        price: bet.price,
        numbers: bet.numbers.split(',').map(number => {
          return parseInt(number, 10);
        }),
      };
    });
    yield put(clearRecentBets());
    yield put(getBetSuccess(bets));
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
