import { all, takeEvery, fork, put } from 'redux-saga/effects';
import {
  addBetRequest,
  addBetFailure,
  addBetSuccess,
  Types,
} from '../ducks/bet';

export function* handleBet({ payload }: ReturnType<typeof addBetRequest>) {
  try {
    yield put(addBetSuccess(payload.bet));
  } catch (error) {
    yield put(addBetFailure(error));
  }
}

function* watchOnHandleBet() {
  yield takeEvery(Types.ADD_BET_REQUEST, handleBet);
}

export default function* lyricsSaga() {
  yield all([fork(watchOnHandleBet)]);
}
