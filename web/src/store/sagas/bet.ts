import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../services/api';
import { Bet, Game, GetBet, LongBetData } from '../../interfaces';
import {
  addBetRequest,
  addBetFailure,
  addBetSuccess,
  getBetRequest,
  getBetFailure,
  getBetSuccess,
  Types,
} from '../ducks/bet';

export function* handleGetBet({ payload }: ReturnType<typeof getBetRequest>) {
  try {
    const response: LongBetData[] = yield call(api.get, `/bets`);

    const bets: Bet[] = response.map((bet: LongBetData) => {
      return {
        id: bet.id,
        type: bet.game.type,
        color: bet.color,
        date: bet.created_at,
        price: bet.price,
        numbers: bet.numbers.split(',').map(item => {
          return parseInt(item, 10);
        }),
      };
    });

    const page = response.length < 20 ? payload.page : payload.page + 1;

    yield put(getBetSuccess(bets, page));
  } catch (error) {
    yield put(getBetFailure(error));
  }
}

export function* handleAddBet({ payload }: ReturnType<typeof addBetRequest>) {
  try {
    yield call(api.post, '/bets', payload.bets);

    yield put(addBetSuccess());
  } catch (error) {
    yield put(addBetFailure(error));
  }
}

export function* watchOnHandleGetBet() {
  yield all([takeEvery(Types.GET_BET_REQUEST, handleGetBet)]);
}
export function* watchOnHandleAddBet() {
  yield all([takeEvery(Types.ADD_BET_REQUEST, handleAddBet)]);
}

export default function* lyricsSaga() {
  yield all([fork(watchOnHandleGetBet), fork(watchOnHandleAddBet)]);
}
