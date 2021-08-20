import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../services/api';
import { Bet, LongBetData, NewBet } from '../../interfaces';
import {
  addBetRequest,
  addBetFailure,
  addBetSuccess,
  Types,
  getBetRequest,
  clearRecentBets,
  getBetSuccess,
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
    yield put(clearCart());
    yield put(addBetSuccess());
    yield put(clearRecentBets());
    yield put(getBetRequest(1, 0));
  } catch (error) {
    yield put(addBetFailure(error));
  }
}

export function* handleGetBet({ payload }: ReturnType<typeof getBetRequest>) {
  const { data: allBets } = yield call(api.get, `/bets?page=${payload.page}&perPage=10`);

    const bets: Bet[] = allBets.data.map((bet: LongBetData) => {
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

    yield put(getBetSuccess(bets, payload.page));
}

export function* watchOnHandleAddBet() {
  yield all([takeEvery(Types.ADD_BET_REQUEST, handleAddBet)]);
}

export function* watchOnHandleGetBet() {
  yield all([takeEvery(Types.GET_BET_REQUEST, handleGetBet)]);
}

export default function* lyricsSaga() {
  yield all([fork(watchOnHandleAddBet), fork(watchOnHandleGetBet)]);
}
