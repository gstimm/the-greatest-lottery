import { all, takeLatest, put } from 'redux-saga/effects';
import {
  addBetRequest,
  addBetFailure,
  addBetSuccess,
  Types,
} from '../ducks/bet';

export function* handleBet({ payload }: ReturnType<typeof addBetRequest>) {
  try {
    yield put(addBetSuccess(payload.bets));
  } catch (error) {
    yield put(addBetFailure(error));
  }
}

export default function* watchOnHandleBet() {
  yield all([takeLatest(Types.ADD_BET_REQUEST, handleBet)]);
}
