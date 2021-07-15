import { all, fork } from 'redux-saga/effects';

import Auth from './sagas/auth';
import Bet from './sagas/bet';

export default function* rootSaga() {
  yield all([fork(Auth), fork(Bet)]);
}
