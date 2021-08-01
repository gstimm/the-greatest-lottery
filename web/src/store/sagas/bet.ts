import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../services/api';
import {
  addBetRequest,
  addBetFailure,
  addBetSuccess,
  getBetRequest,
  getBetFailure,
  getBetSuccess,
  Types,
  firstGet,
} from '../ducks/bet';

// interface Game {
//   id: number;
//   type: string;
//   color: string;
//   description: string;
//   range: number;
//   'max-number': number;
//   price: number;
//   'min-cart-value': number;
// }

interface Bet {
  id: number;
  user_id: number;
  game_id: number;
  price: number;
  numbers: string;
  created_at: string;
  updated_at: string;
  game: Game;
}

interface Game {
  id: number;
  type: string;
  description: string;
  color: string;
  range: number;
  price: number;
  max_number: number;
  min_cart_value: number;
  created_at: string;
  updated_at: string;
}

// interface getBetRequest extends Bet {
//   game: Game;
//   created_at: string;
// }

export function* handleGetBet({ payload }: ReturnType<typeof getBetRequest>) {
  try {
    const { data: bets } = yield call(api.get, `/bets?page=${payload.page}`);

    const array: Bet[] = [];

    bets.map((bet: Bet) => array.push(bet));

    yield put(firstGet(bets));

    // if (response.data.total > payload.total) {
    //   const bets = response.data.data.map((bet: getBetRequest) => {
    //     return {
    //       type: bet.game.type,
    //       color: bet.game.color,
    //       date: bet.created_at,
    //       price: bet.price,
    //       number: bet.numbers,
    //     };
    //   });

    const page = bets.length < 20 ? payload.page : payload.page + 1;

    yield put(getBetSuccess(bets, page));
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
