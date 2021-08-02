import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../services/api';
import { Bet } from '../../interfaces';
import {
  addBetRequest,
  addBetFailure,
  addBetSuccess,
  getBetRequest,
  getBetFailure,
  getBetSuccess,
  Types,
} from '../ducks/bet';

// }

export function* handleGetBet({ payload }: ReturnType<typeof getBetRequest>) {
  try {
    const { data } = yield call(api.get, `/bets?page=${payload.page}`);

    if (data.total > payload.total) {
      const bets = data.data.map((bet: Bet) => {
        return {
          id: bet.id,
          type: bet.type,
          color: bet.color,
          date: bet.date,
          price: bet.price,
          numbers: bet.numbers,
        };
      });

      const page = data.length < 20 ? payload.page : payload.page + 1;

      yield put(getBetSuccess(bets, page));
    }
  } catch (error) {
    yield put(getBetFailure(error));
  }
}

export function* watchOnHandleGetBet() {
  yield all([takeEvery(Types.GET_BET_REQUEST, handleGetBet)]);
}

export default function* lyricsSaga() {
  yield all([fork(watchOnHandleGetBet)]);
}
