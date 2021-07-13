import { all, fork } from 'redux-saga/effects';

import Auth from './sagas/auth';

export default function* rootSaga() {
  yield all([fork(Auth)]);
}
