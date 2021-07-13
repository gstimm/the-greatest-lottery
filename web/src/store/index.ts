import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AuthState } from './ducks/auth';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

export interface ApplicationStore {
  Auth: AuthState;
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store: Store<ApplicationStore> = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSaga);

export default store;
