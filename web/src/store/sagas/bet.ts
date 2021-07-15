import { all, put, takeEvery } from 'redux-saga/effects';
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

export default function* watchOnHandleBet() {
  yield all([takeEvery(Types.ADD_BET_REQUEST, handleBet)]);
}
