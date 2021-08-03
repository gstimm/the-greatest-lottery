import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../services/api';
import { NewBet } from '../../interfaces';
import {
  addBetRequest,
  addBetFailure,
  addBetSuccess,
  Types,
  clearRecentBets,
} from '../ducks/bet';
import { clearCart } from '../ducks/cart';

export function* handleAddBet({ payload }: ReturnType<typeof addBetRequest>) {
  const bets = payload.bets.map((bet: NewBet) => {
    return {
      game_id: bet.game_id,
      numbers: bet.numbers,
    };
  });
  try {
    yield call(api.post, '/bets', { bets });
    yield put(addBetSuccess());
    yield put(clearCart());
    yield put(clearRecentBets());
  } catch (error) {
    yield put(addBetFailure(error));
  }
}

export function* watchOnHandleAddBet() {
  yield all([takeEvery(Types.ADD_BET_REQUEST, handleAddBet)]);
}

export default function* lyricsSaga() {
  yield all([fork(watchOnHandleAddBet)]);
}
